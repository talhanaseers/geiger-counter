## Inspiration

Nuclear power plants are the cleanest, most cost-effective source of energy available today, and with the increasing demand for sustainable energy, their role is expected to grow significantly. This growth will create a heightened need for affordable, efficient solutions to monitor and measure ionizing radiation. Recognizing this need, we developed the *Gamma-Sense* project: a portable, precise, and cost-effective radiation detection system. By combining modern technology with the classic Geiger-Müller tube, *Gamma-Sense* aims to provide an accessible solution for radiation monitoring in both professional and personal settings.

## What it does

*Gamma-Sense* is a portable nuclear radiation detector capable of measuring alpha, beta, and gamma radiation. Using a Geiger-Müller (GM) tube filled with noble gas such as Argon or Xenon, the device detects the ionization of gas caused by the passage of a radioactive particle. The resulting pulse is processed to produce a reading of counts per minute (CPM), which reflects the level of radiation present in the environment. The system also tracks real-time data, including temperature, to provide a comprehensive understanding of radiation exposure.

## How we built it

### **Circuitry**

At the heart of *Gamma-Sense* lies the Geiger-Müller (GM) tube. We designed the power supply system to step up a 5V battery voltage to 400V DC, which is required to energize the GM tube. The pulse generated by the GM tube when it detects ionizing radiation is initially amplified using a class-A amplifier and an N-Channel MOSFET. This pulse is then passed through a peak-detector circuit and further amplified in a two-stage amplifier to increase the signal by a factor of 4. The amplified pulse is converted into a voltage, which is suitable for processing by the embedded system.

### **Embedded Systems**

We used the ESP32 microcontroller to handle the pulse detection and data processing. The ESP32 is responsible for sampling the amplified pulses, calculating the CPM values, and sending the data via WiFi to our web application. The device features a TFT display and an LCD screen to show real-time measurements of ionizing radiation and temperature. A thermal imaging sensor is integrated to enhance the understanding of the environmental conditions.

### **Web App Development**

The real-time radiation data is visualized on a web platform, which we developed using the following tech stack:

- **React.js**: For building the user interface and ensuring a dynamic, responsive front-end.
- **D3.js**: To visualize the radiation data on a 3D graph, tracking radiation levels over time.
- **AWS Amplify**: To manage backend services, authentication, and deployment.
- **AWS IoT Core & AWS REST API**: For secure and efficient data transfer between the embedded system and the cloud.
- **AWS Lambda**: To process and handle server-side logic for data management.
- **Bootstrap**: For responsive and modern front-end design.
- **JavaScript** and **HTML**: For web development and creating the overall application structure.

### **Tools and Software Used**

- **ESP32 Microcontroller** and **Arduino IDE**: For programming the embedded system and detecting radiation pulses.
- **Geiger Pulse Counter**: For converting the detected radiation events into digital signals.
- **VS Code** and **GitHub**: For development and version control.
- **GitHub Desktop**: For easier management of local repositories during development.

## Challenges We Encountered

During the development of *Gamma-Sense*, we faced several technical challenges, particularly in the areas of IoT connectivity, data transmission, and time management:

1. **IoT WiFi Connection**: Initially, establishing a stable WiFi connection between the embedded system (ESP32) and the cloud was a challenge. We worked through connectivity issues, ensuring reliable data transmission. After extensive troubleshooting, we successfully linked the device to the internet.

2. **Sending MQTT Messages**: Once the device was connected to WiFi, we faced difficulties in sending MQTT messages to transmit radiation data to the cloud. Configuring the system to reliably send real-time updates was crucial, but it required significant testing and debugging. After resolving the issue, the system was able to send data successfully to our web application.

3. **Time Constraints**: Due to the time limitations of the hackathon, we were unable to implement an AI model for summarizing the data or making predictions based on radiation levels. While this would have added an additional layer of functionality to the app, it was not part of the core objectives, and we prioritized building the fundamental features of the device.

Despite these hurdles, we successfully completed the project, with the core functionality of real-time radiation detection and data visualization intact.

## Accomplishments We’re Proud Of

We are particularly proud of how our team, despite our diverse backgrounds in electrical and computer engineering and computer science, was able to work collaboratively to build a functioning, portable radiation detector. We also optimized our time management throughout the hackathon, ensuring that every moment contributed to the success of the project. Reviving the classic Geiger-Müller tube and modernizing it for practical, everyday use in radiation monitoring is another major accomplishment.

## What We Learned

One of the key lessons we learned was the importance of utilizing existing solutions rather than reinventing the wheel. Whether it was using pre-built circuits or software libraries, integrating reliable, tested tools saved significant time and effort. This allowed us to focus on the unique aspects of our project, ultimately leading to its success.

## What’s Next for Gamma-Sense

In the future, we plan to:

- Enhance the *Gamma-Sense* device by improving its sensitivity to measure a broader range of radiation levels.
- Expand its capabilities to provide more granular data and real-time alerts for users.
- Explore mobile application integration to allow for on-the-go monitoring.
- Scale the system for professional use in industries like nuclear power plants, healthcare, and environmental monitoring.

*Gamma-Sense* has the potential to revolutionize radiation detection by making it more accessible, accurate, and portable, ensuring safety in environments where radiation exposure is a concern.
