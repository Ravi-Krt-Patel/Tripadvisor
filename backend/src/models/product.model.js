const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    product_image: { type: String, required: true },
    product_price: { type: String, required: true },
    free_cancelation: { type: Boolean, required: false },
    company_name: [{ type: String, required: false }],
    facility: [{ type: String, required: false }]
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("product", productSchema);

// "Agoda.com", "17,543", "Expedia", "18,235", "Trip.com", "18,298", "booking.com", "17,954", "Hotel.com", "17,976"

//"Bar/Laung","fitness cetre","Free wifi","Room service","Restaurant"



// Taking safety measures

// Bar/Laung

//  fitness cetre

//  Free wifi

//  Restaurant

// Room service

// Special offer
// Fitness center