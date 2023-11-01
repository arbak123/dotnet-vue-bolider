# MERN Boilerplate

Jumpstart Your MERN Stack Projects!

Dive into MERN (MongoDB, Express.js, React, Node.js) stack development without tedious initial setup, configuration, and authentication hassles?

## Description

While building projects,redoing the same configs,installations,etc multiple times felt tedious and I am sure many of other fellow developers also feel the same way.So I hope this boilerplate code help them to not worry about all that and instead focus on the amazing ideas that they are working to build straighaway.
#### What's Inside
1) Out-of-the-Box Setup: Get up and running in minutes. Our boilerplate provides a preconfigured MERN environment, sparing you from the initial setup headaches.

2) User Authentication: We've implemented user authentication, so you can focus on building your application's core features instead of worrying about user registration, login, and account management.

3) API Integration: The Express.js backend is pre-equipped with API endpoints and routing for seamless communication with your React frontend. Data management is a breeze.

4) React Frontend: A robust, responsive, and customizable React frontend is included. Kickstart your project with a clean and well-structured user interface.

5) Customization: Tailor the boilerplate to your project's specific needs with ease. Add additional libraries, components, or features as you see fit.

6) Modular Architecture: Our boilerplate follows best practices, ensuring your project remains scalable, maintainable, and easy to work with as it grows.

7) Documentation: Comprehensive documentation is available to help you understand and make the most of the boilerplate's features.

## Getting Started
1. Clone this repository with the following command:

       `git clone git@github.com:SahilPandhade/mern-boilerplate.git`
2. Create a .env file inside client folder and one inside backend folder.
    You will need this to store your secret keys.

    #### Setting up proxy :

     * In the client folder,open the *vite.config.ts*
     * Below plugins,add the following code:

            `server: {
               proxy: {
                '/api': {
                    target:  "YOUR_BACKEND_LOCALHOST_ADDRESS_HERE",
                    changeOrigin: true,
                    secure: false,
                },
              },
             },`
     That's all you will need to get started with the mern-boilerplate !


### Setting up Project


1. Create a new terminal.Go inside client folder.Enter following command to install all dependencies:

       `npm install`
2. To start client, type the command: 

       `npm run dev`

3. Create another terminal and navigate to the backend folder. Enter following command to start the backend server:
     
       `npm install`
4. To start the server simply enter: 
           
       `npm start` 
  And That's it! You are project is now up and running and you can now start building your cool project.


## Authors
[@SahilPandhade](https://github.com/SahilPandhade)

## Version History

* 0.1
    * Initial Release

## Help

In case of any issues or suggestions,feel free to reach out to me :
* Github: [@SahilPandhade](https://github.com/SahilPandhade)
* LinkedIn: [sahil-pandhade](https://www.linkedin.com/in/sahil-pandhade-669655191/)

Thank you for checking out this project.Do consider giving it a star if you liked it!