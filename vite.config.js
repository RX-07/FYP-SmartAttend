import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src',
    server: {
        open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        attendance: resolve(__dirname, 'src/attendance.html'),
        forgotPassword: resolve(__dirname, 'src/ForgotPassword.html'),
        profile: resolve(__dirname, 'src/Profile.html'),
        signup: resolve(__dirname, 'src/Signup.html'),
        studentHome: resolve(__dirname, 'src/studentHome.html'),
        subjectApprove: resolve(__dirname, 'src/subjectApprove.html'),
        subjectEnrol: resolve(__dirname, 'src/subjectEnrol.html'),
        timetable: resolve(__dirname, 'src/timetable.html'),
        submitMC: resolve(__dirname, 'src/submitMC.html')
      },
    },
  },
});