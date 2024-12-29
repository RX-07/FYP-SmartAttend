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

    try {
        // Check if the deviceId is already associated with another account
        const deviceDocRef = doc(db, 'Devices', deviceId);
        const deviceDoc = await getDoc(deviceDocRef);
        if (deviceDoc.exists()) {
            setTimeout(() => {
                toastr.warning('This device is already bound to another account.');
                return;
            }, 6000);
        } else {
            // Proceed with binding if the device is not already bound
            await updateDoc(userDocRef, { 
                deviceInfo: {
                    deviceId, 
                    deviceName, 
                    deviceType, 
                    lastBound: new Date().toISOString() // Record binding timestamp
                }
            });

            // Create a new document in a 'Devices' collection to track device bindings
            await setDoc(deviceDocRef, { 
                uid, 
                deviceId, 
                deviceName, 
                deviceType, 
                boundAt: new Date().toISOString() 
            });
            toastr.success('Account successfully bound to this device.');
        }
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
                // Fetch both documents concurrently
                const [deviceDoc, userDoc] = await Promise.all([
                    getDoc(deviceDocRef),
                    getDoc(userDocRef),
                ]);

                if (deviceDoc.exists()) {
                    const deviceData = deviceDoc.data();

                    // Check if the device is already bound to this user
                    if (deviceData.uid === uid) {
                        if (userDoc.exists()) {
                            const userData = userDoc.data();
                            const storedDeviceId = userData.deviceInfo?.deviceId;

                            if (storedDeviceId === deviceId) {
                                console.log('Device is already bound and consistent for this user.');
                                return;
                            } else {
                                toastr.warning(
                                    'Device ID mismatch. Please contact support or rebind your device.'
                                );
                                promptChangeDeviceOrSignOut(userDocRef, deviceId, userData.deviceInfo?.lastBound);
                                return;
                            }
                        } else {
                            console.error('User document not found.');
                            return;
                        }
                    } else {
                        toastr.warning(
                            'This device is bound to another account. Please use a different device or sign out.'
                        );

                        setTimeout(() => {
                            auth.signOut();
                            window.location.href = 'index.html';
                        }, 5000); 
                    }
                }

                // If the deviceDoc does not exist, fallback to user document check
                if (userDoc.exists()) {
                    const data = userDoc.data();
                    const storedDeviceId = data.deviceInfo?.deviceId;

                    if (!storedDeviceId) {
                        promptBindDevice();
                    } else if (storedDeviceId !== deviceId) {
                        promptChangeDeviceOrSignOut(userDocRef, deviceId, data.deviceInfo?.lastBound);
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

function promptBindDevice() {
    if (confirm('This account is not bound to this device. Do you want to bind it now?')) {
        bindDeviceToAccount();
    } else {
        toastr.warning('You must bind this account to a device to proceed.');
        setTimeout(() => {
            auth.signOut();
            window.location.href = 'index.html';
        }, 5000);
    }
}

async function promptChangeDeviceOrSignOut(userDocRef, deviceId, lastBound) {
    const cooldownTime = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const now = new Date();
    const lastBoundDate = new Date(lastBound || 0);

    if (now - lastBoundDate < cooldownTime) {
        const remainingDays = Math.ceil((cooldownTime - (now - lastBoundDate)) / (24 * 60 * 60 * 1000));
        toastr.info(`You can only change devices once every 7 days. Please try again in ${remainingDays} days.`);
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
        }, 5000);
    }
}

function getDeviceIdentifier() {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
        deviceId = crypto.randomUUID(); // Generate a unique device ID
        localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
}

// Function to get the device name
function getDeviceName() {
    return navigator.userAgent;
}

// Function to get the device type
function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('mobile')) return 'Mobile';
    if (userAgent.includes('tablet')) return 'Tablet';
    if (userAgent.includes('windows') || userAgent.includes('macintosh')) return 'Desktop';
    return 'Unknown';
}

validateDeviceId();