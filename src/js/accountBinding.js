import { auth, db, doc, updateDoc, getDoc, setDoc } from './FirebaseConfig.js';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options.positionClass = 'toast-bottom-right';

export async function bindDeviceToAccount() {
    const user = auth.currentUser;
    if (!user) {
        console.error('No authenticated user found. Cannot bind account to device.');
        return;
    }

    const uid = user.uid;
    const deviceId = getDeviceIdentifier();
    const deviceName = getDeviceName();
    const deviceType = getDeviceType();
    const userDocRef = doc(db, 'Students', uid);
    const deviceDocRef = doc(db, 'Devices', deviceId);

    try {
        const deviceDoc = await getDoc(deviceDocRef);
        if (deviceDoc.exists()) {
            toastr.warning('This device is already bound to another account.');
            return;
        }

        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
            const userData = userDoc.data();
            const storedDeviceId = userData.deviceInfo?.deviceId;
            const lastBound = userData.deviceInfo?.lastBound;

            if (storedDeviceId && storedDeviceId !== deviceId) {
                if (!canChangeDevice(lastBound)) {
                    return;
                }
            }
        }

        await updateDoc(userDocRef, {
            deviceInfo: {
                deviceId,
                deviceName,
                deviceType,
                lastBound: new Date().toISOString()
            }
        });

        await setDoc(deviceDocRef, {
            uid,
            deviceId,
            deviceName,
            deviceType,
            boundAt: new Date().toISOString()
        });

        toastr.success('Account successfully bound to this device.');
    } catch (error) {
        console.error('Error binding account to device:', error);
        toastr.error('Error binding account to device. Please try again later.');
    }
}

export function validateDeviceId() {
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            const uid = user.uid;
            const deviceId = getDeviceIdentifier();
            const userDocRef = doc(db, 'Students', uid);
            const deviceDocRef = doc(db, 'Devices', deviceId);

            try {
                const [deviceDoc, userDoc] = await Promise.all([
                    getDoc(deviceDocRef),
                    getDoc(userDocRef),
                ]);

                if (deviceDoc.exists()) {
                    const deviceData = deviceDoc.data();
                    
                    if (deviceData.uid === uid) {
                        if (userDoc.exists()) {
                            const userData = userDoc.data();
                            const storedDeviceId = userData.deviceInfo?.deviceId;
                            const lastBound = userData.deviceInfo?.lastBound;

                            if (storedDeviceId === deviceId) {
                                console.log('Device is already bound and consistent for this user.');
                                return;
                            } else {
                                toastr.warning('Device ID mismatch. Please rebind your device.');
                                promptChangeDeviceOrSignOut(userDocRef, deviceId, lastBound);
                                return;
                            }
                        } else {
                            console.error('User document not found.');
                            return;
                        }
                    } else {
                        toastr.warning('This device is bound to another account. Please use a different device or sign out.');
                        setTimeout(() => {
                            auth.signOut();
                            window.location.href = 'index.html';
                        }, 6000);
                        return;
                    }
                }

                if (userDoc.exists()) {
                    const data = userDoc.data();
                    const storedDeviceId = data.deviceInfo?.deviceId;
                    const lastBound = data.deviceInfo?.lastBound;

                    if (!storedDeviceId) {
                        promptBindDevice();
                    } else if (storedDeviceId !== deviceId) {
                        promptChangeDeviceOrSignOut(userDocRef, deviceId, lastBound);
                    }
                } else {
                    console.error('User document not found.');
                }
            } catch (error) {
                console.error('Error validating device ID:', error);
            }
        }
    });
}

export function promptBindDevice() {
    if (confirm('This account is not bound to this device. Do you want to bind it now?')) {
        bindDeviceToAccount();
    } else {
        toastr.warning('You must bind this account to a device to proceed.');
        setTimeout(() => {
            auth.signOut();
            window.location.href = 'index.html';
        }, 6000);
    }
}

export async function promptChangeDeviceOrSignOut(userDocRef, deviceId, lastBound) {
    if (!canChangeDevice(lastBound)) {
        return;
    }

    if (confirm('This account is bound to another device. Do you want to change the bound device?')) {
        try {
            await updateDoc(userDocRef, {
                deviceInfo: {
                    deviceId,
                    lastBound: new Date().toISOString(),
                    deviceName: getDeviceName(),
                    deviceType: getDeviceType()
                }
            });

            const deviceDocRef = doc(db, 'Devices', deviceId);
            await setDoc(deviceDocRef, {
                uid: auth.currentUser.uid,
                deviceId,
                deviceName: getDeviceName(),
                deviceType: getDeviceType(),
                boundAt: new Date().toISOString()
            });

            toastr.success('Device binding updated successfully.');
        } catch (error) {
            console.error('Error updating device binding:', error);
            toastr.error('Error updating device binding. Please try again later.');
        }
    } else {
        toastr.info('Sign out initiated.');
        setTimeout(() => {
            auth.signOut();
            window.location.href = 'index.html';
        }, 6000);
    }
}

export function canChangeDevice(lastBound) {
    const cooldownTime = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    if (!lastBound) return true; // No previous binding, allow change

    const lastBoundDate = new Date(lastBound);
    if (isNaN(lastBoundDate.getTime())) {
        console.error('Invalid lastBound date:', lastBound);
        return true;
    }

    const now = new Date();
    const timeElapsed = now - lastBoundDate;

    if (timeElapsed < cooldownTime) {
        const remainingDays = Math.ceil((cooldownTime - timeElapsed) / (24 * 60 * 60 * 1000));
        toastr.info(`You can only change devices once every 7 days. Please try again in ${remainingDays} days.`);
        return false;
    }
    return true;
}

export function getDeviceIdentifier() {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
}

export function getDeviceName() {
    return navigator.userAgent;
}

export function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('mobile')) return 'Mobile';
    if (userAgent.includes('tablet')) return 'Tablet';
    if (userAgent.includes('windows') || userAgent.includes('macintosh')) return 'Desktop';
    return 'Unknown';
}

validateDeviceId();
