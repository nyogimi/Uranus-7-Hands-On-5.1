# Emerging Technologies 3 in CPE (Mobile Computing)

**Mobile Application Development | Uranus-7** <br>
**CPE026| CPE41s4** <br>
A simple Messaging App

This README provides instructions on how to initialize an Expo app and install the necessary dependencies for your project. Expo is a powerful tool that streamlines the development process for creating mobile apps using React Native.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- **Node.js**: [Download and install Node.js](https://nodejs.org/) if you haven't already.

- **Expo CLI**: Install the Expo CLI globally using npm or yarn:

  ```bash
  npm install -g expo-cli
  ```

- **Expo Go**: Install the Expo Go app on your iOS or Android device for testing your app during development.

## Initial Setup

### 1. **Open Your IDE:**

Open your preferred Integrated Development Environment (IDE), such as Visual Studio Code, WebStorm, or any other code editor that you prefer. You will be working within your IDE for the remaining setup steps.

### 2. **Clone the Repository**

In your terminal, navigate to the directory where you want to clone this repository of the Expo App. Then, run the following command:

```bash
git clone <repository-url>
```

Change the `<repository-url>` to the url of this repository.

### 3. **Change Directory to Your New Project:**

Navigate into the newly created project directory:

```bash
cd <app-name>
```

### 4. **Install Project Dependencies:**

After initializing the project, you need to install its dependencies. Use npm to install them:

```bash
npm install
```

This completes the initial setup. You can now proceed to run the app and make further customizations.

## Running the App

1. **Start the Development Server:**

   To run your Expo app, execute the following command in your project directory:

   ```bash
   expo start
   ```

2. **Open Expo Go on Your Mobile Device:**

   - On your mobile device, open the Expo Go app.
   - Scan the QR code displayed in your terminal with your device's camera.

3. **Using an Emulator:**

   If you prefer to use an emulator/simulator, you can choose to run the app in the emulator. Refer to the Expo documentation for platform-specific instructions.

4. **Code Your App**:

   Open the project in your favorite code editor and start developing your Expo app. The source code is located in the project directory, typically under `./YourAppName`.

## Git Version Control

To collaborate with other developers and manage your project using Git, you can use the following commands:

- **Clone the Repository:**

  To clone a remote repository to your local machine, use the following Git command:

  ```bash
  git clone <repository-url>
  ```

- **Pull Changes:**

  To update your local repository with the latest changes from the remote repository, use:

  ```bash
  git pull
  ```

- **Commit Changes:**

  After making changes to your project, commit those changes with a descriptive message:

  ```bash
  git add . # To stage all files
  # or
  git add "filename" # To stage specific files

  # then
  git commit -m "Your descriptive commit message"
  ```

- **Create a New Branch:**

  If you want to work on a new feature or bugfix, create a new Git branch:

  ```bash
  git checkout -b feature/new-feature
  ```

- **Switch Branches:**

  To switch between existing branches, use:

  ```bash
  git checkout <branch-name>
  ```

- **Push Changes:**

  When you're ready to share your changes with others, push them to the remote repository:

  ```bash
  git push origin <branch-name>
  # or
  git push
  ```

For more advanced Git workflows, consult Git documentation and tutorials.

## Additional Resources

- [Expo Documentation](https://docs.expo.dev/): Explore the official Expo documentation for in-depth information about the various features and capabilities available.

- [Expo Community](https://forums.expo.dev/): Join the Expo community to get help, share your knowledge, and stay updated with the latest news and developments.

- [React Native Documentation](https://reactnative.dev/): For advanced development and customization, consult the official React Native documentation.

## Support

If you encounter any issues or have questions about Expo or React Native development, please refer to the resources mentioned above or search for answers on Stack Overflow or other developer forums. Expo has a vibrant community that can provide valuable insights.

Happy coding! 🚀

## Tech Stack

![image](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white) ![image](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white) ![image](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white) ![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
