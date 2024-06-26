const {v4: uuid}=require("uuid");

const hotels = {
    "data" : [
//         {
//             id: uuid(),
//             name: "Sukoon Baag",
//             category: "National Parks",
//             image: "https://a0.muscache.com/im/pictures/90d0b224-16e2-41c1-9819-6002749a193e.jpg?im_w=720",
//             imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-53407714/original/f3cf4c09-5419-4f1c-b47c-01987c09b4df.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/c1947f8b-da1e-4800-badf-ed51be3e90da.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-53407714/original/db0a4d4b-f03a-4c36-a70b-d87bf32c41a7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2430bf07-ec42-4b91-9e16-2f88939671fd.jpg?im_w=720"],
//             address: "Bir",
//             city: "Joginder Nagar Valley",
//             state: "Himachal Pradesh",
//             country: "India",
//             price: 3020,
//             rating: 3.8,
//             numberOfBathrooms: 2,
//             numberOfBeds: 1,
//             numberOfguest: 3,
//             numberOfBedrooms: 1,
//             numberOfStudies: 1,
//             hostName: "Shashi",
//             hostJoinedOn: "December 2019",
//             ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
//             healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm"],
//             houseRules: ["Check-in: After 1:00 pm", "Check out: 11:00 am", "Pets are allowed"],
//             propertyType: "Guest House",
//             isCancelable: true,
//         },


// {
//             id: uuid(),
//             name: "Sooty's Hideout",
//             category: "National Parks",
//             image: "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=720",
//             imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/1479b1a0-ee19-49a6-94e4-3c43049776c0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/cd0c1eba-74bd-4d6b-9ec3-20c6dd8b5226.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/3ac04d3f-b4f5-4d01-8258-8083979c792e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/ac259f95-bc29-4466-89f9-12a97f2b0977.jpeg?im_w=720"],
//             address: "Shangarh",
//             city: "HP",
//             state: "Himachal Pradesh",
//             country: "India",
//             price: 2750,
//             rating: 4.5,
//             numberOfBathrooms: 3,
//             numberOfBeds: 4,
//             numberOfguest: 10,
//             numberOfBedrooms: 3,
//             numberOfStudies: 3,
//             hostName: "Sankalp Avirjaan",
//             hostJoinedOn: "May 2018",
//             ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
//             healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
//             houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
//             propertyType: "House",
//             isCancelable: false,
//         },
// {
//             id: uuid(),
//             name: "StayVista @ Vista Divine",
//             category: "National Parks",
//             image: "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/2b25b21b-87d4-48c9-b796-c2cd04af2788.jpeg?im_w=1200",
//             imageArr: ["https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/76c122b8-e7ab-4933-a5ba-cfc86f949db5.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/1eaf860f-053d-46d9-9ee9-c7a603473ed0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/57c1ca9f-8a11-4453-a15a-d6f0a257931c.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-46781700/original/eaf3779d-7978-4850-909b-c7a6ae6d15d8.jpeg?im_w=720"],
//             address: "Rishikesh",
//             city: "Rishikesh",
//             state: "Uttarakhand",
//             country: "India",
//             price: 13541,
//             rating: 4.69,
//             numberOfBathrooms: 4,
//             numberOfBeds: 3,
//             numberOfguest: 0,
//             numberOfBedrooms: 3,
//             numberOfStudies: 3,
//             hostName: " Ojas",
//             hostJoinedOn: "May 2019",
//             ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
//             healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
//             houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
//             propertyType: "Hotel",
//             isCancelable: true,
//         },

// {
//             id: uuid(),
//             name: "Sun View Mountain",
//             category: "National Parks",
//             image: "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/f4cfbfab-6113-444b-b1ac-f60e72ea510d.jpeg?im_w=1200",
//             imageArr: ["https://a0.muscache.com/im/pictures/89337997-5bdd-4dcd-9cc2-dd119df044ab.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-20815828/original/52b8b87c-af68-4823-ad83-24f1d1ce1ce7.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/922f596f-9c8a-4b40-b729-4e352bdd6ae8.jpg?im_w=720","https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/06100942/Kalpa.jpg"],
//             address: "Kasol",
//             city: "kasol",
//             state: "Himachal Pradesh",
//             country: "India",
//             price: 925,
//             rating: 4.86,
//             numberOfBathrooms: 3,
//             numberOfBeds: 4,
//             numberOfguest: 10,
//             numberOfBedrooms: 3,
//             numberOfStudies: 3,
//             hostName: "Sankalp Avirjaan",
//             hostJoinedOn: "May 2018",
//             ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
//             healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
//             houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
//             propertyType: "House",
//             isCancelable: true,
//         },

//         // from here
//         {
//             id: uuid(),
//             name: "Folktales ; a Boutique Homestay & Artist Retreat#",
//             category: "National Parks",
//             image: "https://a0.muscache.com/im/pictures/cfdf5973-9fc1-42d3-bde1-a072fdbe1825.jpg?im_w=1200",
//             imageArr: ["https://a0.muscache.com/im/pictures/c7ecaa29-a2a6-4e50-8dd5-a4719096fb4b.jpg?im_w=720", "https://a0.muscache.com/im/pictures/d9f4455c-f29b-4068-81b8-c05957239930.jpg?im_w=720", "https://a0.muscache.com/im/pictures/eba3d6d8-8b5b-43a0-b1d4-05a4bb1c578b.jpg?im_w=720", "https://a0.muscache.com/im/pictures/941cc6e4-4178-489b-b92c-1df3af7a3464.jpg?im_w=720"],
//             address: "Rakchham",
//             city: "Rakchham",
//             state: "Himachal Pradesh",
//             country: "India",
//             price: 1850,
//             rating: 4.92,
//             numberOfBathrooms: 3,
//             numberOfBeds: 2,
//             numberOfguest: 5,
//             numberOfBedrooms: 2,
//             numberOfStudies: 3,
//             hostName: "Ishan",
//             hostJoinedOn: "July 2015",
//             ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
//             healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
//             houseRules: ["Check-in: 12:00 pm - 7:00 pm", "Check out: 10:00 am", "Self check-in with lockbox", "Pets are allowed", "No smoking", "No parties or events"],
//             propertyType: "House",
//             isCancelable: true,
//         },
        {
            id: uuid(),
            name: "RiverTree Duplex- Riverside Plantation TreehouseAC",
            category: "Tiny Homes",
            image: "https://a0.muscache.com/im/pictures/c59d4481-f48a-43db-ade2-1df5689b725f.jpg?im_w=1200",
            imageArr: ["https://a0.muscache.com/im/pictures/51c9fc89-517c-42ed-a97b-002b5282c22a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/f96ed3c3-6bbd-47f7-ac88-aa1bd9babb72.jpg?im_w=720", "https://a0.muscache.com/im/pictures/92b4a81e-416b-4c29-a1b0-4a9ce29ec223.jpg?im_w=720", "https://a0.muscache.com/im/pictures/e1dddd34-90fd-4394-a211-7ff96e00a57f.jpg?im_w=720"],
            address: "Kottathara",
            city: "Wayanad",
            state: "Kerala",
            country: "India",
            price: 2580,
            rating: 5.0,
            numberOfBathrooms: 3,
            numberOfBeds: 4,
            numberOfguest: 10,
            numberOfBedrooms: 3,
            numberOfStudies: 3,
            hostName: "Sankalp Avirjaan",
            hostJoinedOn: "May 2018",
            ameneties: ["Kitchen", "Wifi", "Pets Allowed"],
            healthAndSafety: ["No Smoke alarm", "No Carbon monoxide alarm", "Nearby lake, river, other body of water"],
            houseRules: ["Check-in: After 2:00 pm", "Check out: 11:00 am", "Pets are allowed", "No smoking", "No parties or events"],
            propertyType: "Hotel",
            isCancelable: true,
        }
    ]
}

module.exports = hotels;

