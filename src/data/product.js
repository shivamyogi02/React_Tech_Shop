// export default products;import sony1 from "../assets/product/sonyXb910n-1.png";
import sony2 from "../assets/product/sonyXb910n-2.png";
import sony3 from "../assets/product/sonyXb910n-3.png";
import sony4 from "../assets/product/sonyXb910n-4.png";

import boat1 from "../assets/product/boat518-1.png";
import boat2 from "../assets/product/boat518-2.png";
import boat3 from "../assets/product/boat518-3.png";
import boat4 from "../assets/product/boat518-4.png";

import jbl1 from "../assets/product/jbl500bt-1.png";
import jbl2 from "../assets/product/jbl500bt-2.png";
import jbl3 from "../assets/product/jbl500bt-3.png";
import jbl4 from "../assets/product/jbl500bt-4.png";

import jbl660_1 from "../assets/product/jbl660nc-1.png";
import jbl660_2 from "../assets/product/jbl660nc-2.png";
import jbl660_3 from "../assets/product/jbl660nc-3.png";
import jbl660_4 from "../assets/product/jbl660nc-4.png";

import boat255_1 from "../assets/product/boat255r-1.png";
import boat255_2 from "../assets/product/boat255r-2.png";
import boat255_3 from "../assets/product/boat255r-3.png";
import boat255_4 from "../assets/product/boat255r-4.png";

import sonyCh1 from "../assets/product/sonyCh710n-1.png";
import sonyCh2 from "../assets/product/sonyCh710n-2.png";
import sonyCh3 from "../assets/product/sonyCh710n-3.png";
import sonyCh4 from "../assets/product/sonyCh710n-4.png";

import jblEnd1 from "../assets/product/jbl-endu-1.png";
import jblEnd2 from "../assets/product/jbl-endu-2.png";
import jblEnd3 from "../assets/product/jbl-endu-3.png";
import jblEnd4 from "../assets/product/jbl-endu-4.png";

import sony1000_1 from "../assets/product/sony1000xm4-1.png";
import sony1000_2 from "../assets/product/sony1000xm4-2.png";
import sony1000_3 from "../assets/product/sony1000xm4-3.png";
import sony1000_4 from "../assets/product/sony1000xm4-4.png";

import boat203_1 from "../assets/product/boat203-1.png";
import boat203_2 from "../assets/product/boat203-2.png";
import boat203_3 from "../assets/product/boat203-3.png";
import boat203_4 from "../assets/product/boat203-4.png";

// Full product list
const products = [{
        id: 1,
        name: "Sony XB910N",
        brand: "Sony",
        desc: "Keep the noise out, or in. You choose.",
        price: "₹24,999",
        discountPrice: "₹19,999",
        priceNum: 24999,
        discountPriceNum: 19999,
        images: [sony2, sony3, sony4],
        featured: true,
        category: "Headphones",
    },
    {
        id: 2,
        name: "Boat Rockerz 518",
        brand: "BoAt",
        desc: "Lightweight wireless headphones with thumping bass.",
        price: "₹2,999",
        discountPrice: "₹1,799",
        priceNum: 2999,
        discountPriceNum: 1799,
        images: [boat1, boat2, boat3, boat4],
        featured: true,
        category: "Headphones",
    },
    {
        id: 3,
        name: "JBL 500BT",
        brand: "JBL",
        desc: "Pure bass sound with up to 16 hours of wireless playtime.",
        price: "₹4,999",
        discountPrice: "₹3,499",
        priceNum: 4999,
        discountPriceNum: 3499,
        images: [jbl1, jbl2, jbl3, jbl4],
        featured: true,
        category: "Headphones",
    },
    {
        id: 4,
        name: "JBL 660NC",
        brand: "JBL",
        desc: "Active Noise Cancelling for deep focus.",
        price: "₹14,999",
        discountPrice: "₹9,999",
        priceNum: 14999,
        discountPriceNum: 9999,
        images: [jbl660_1, jbl660_2, jbl660_3, jbl660_4],
        featured: true,
        category: "Headphones",
    },
    {
        id: 5,
        name: "boAt Rockerz 255R",
        brand: "BoAt",
        desc: "Wireless neckband earphones with extra bass and mic.",
        price: "₹2,499",
        discountPrice: "₹1,299",
        priceNum: 2499,
        discountPriceNum: 1299,
        images: [boat255_1, boat255_2, boat255_3, boat255_4],
        featured: true,
        category: "Neckbands",
    },
    {
        id: 6,
        name: "Sony CH710N",
        brand: "Sony",
        desc: "Wireless Noise Cancelling Headphones.",
        price: "₹14,990",
        discountPrice: "₹9,499",
        priceNum: 14990,
        discountPriceNum: 9499,
        images: [sonyCh1, sonyCh2, sonyCh3, sonyCh4],
        featured: true,
        category: "Headphones",
    },
    {
        id: 7,
        name: "JBL Endurance Run",
        brand: "JBL",
        desc: "Wired sports earphones with mic.",
        price: "₹1,599",
        discountPrice: "₹999",
        priceNum: 1599,
        discountPriceNum: 999,
        images: [jblEnd1, jblEnd2, jblEnd3, jblEnd4],
        featured: true,
        category: "Earphones",
    },
    {
        id: 8,
        name: "Sony WH-1000XM4",
        brand: "Sony",
        desc: "Industry-leading Noise Cancelling headphones.",
        price: "₹29,990",
        discountPrice: "₹24,499",
        priceNum: 29990,
        discountPriceNum: 24499,
        images: [sony1000_1, sony1000_2, sony1000_3, sony1000_4],
        featured: true,
        category: "Headphones",
    },
    {
        id: 9,
        name: "boAt BassHeads 203",
        brand: "BoAt",
        desc: "Crystal-clear sound and sleek design.",
        price: "₹1,499",
        discountPrice: "₹999",
        priceNum: 1499,
        discountPriceNum: 999,
        images: [boat203_1, boat203_2, boat203_3, boat203_4],
        featured: true,
        category: "Earbuds",
    },
    {
        id: 10,
        name: "JBL Tune 760NC",
        brand: "JBL",
        desc: "Noise Cancelling with deep bass and long battery.",
        price: "₹12,999",
        discountPrice: "₹9,499",
        priceNum: 12999,
        discountPriceNum: 9499,
        images: [jbl660_1, jbl660_2, jbl660_3, jbl660_4],
        featured: true,
        category: "Headphones",
    },
    {
        id: 11,
        name: "Sony WF-1000XM4",
        brand: "Sony",
        desc: "Truly wireless earbuds with noise cancellation.",
        price: "₹17,999",
        discountPrice: "₹14,999",
        priceNum: 17999,
        discountPriceNum: 14999,
        images: [sony2, sony3, sony4],
        featured: true,
        category: "Earbuds",
    },
    {
        id: 12,
        name: "JBL Quantum 200",
        brand: "JBL",
        desc: "Gaming headphones with immersive sound.",
        price: "₹4,999",
        discountPrice: "₹3,499",
        priceNum: 4999,
        discountPriceNum: 3499,
        images: [jbl1, jbl2, jbl3, jbl4],
        featured: false,
        category: "Headphones",
    },
    {
        id: 13,
        name: "boAt Rockerz 330",
        brand: "BoAt",
        desc: "Wireless earbuds with deep bass.",
        price: "₹1,999",
        discountPrice: "₹1,299",
        priceNum: 1999,
        discountPriceNum: 1299,
        images: [boat1, boat2, boat3, boat4],
        featured: false,
        category: "Earbuds",
    },
    {
        id: 14,
        name: "Sony WH-CH510",
        brand: "Sony",
        desc: "Compact wireless headphones.",
        price: "₹4,490",
        discountPrice: "₹3,499",
        priceNum: 4490,
        discountPriceNum: 3499,
        images: [sonyCh1, sonyCh2, sonyCh3, sonyCh4],
        featured: false,
        category: "Headphones",
    },
    {
        id: 15,
        name: "boAt BassHeads 900",
        brand: "BoAt",
        desc: "Over-ear wired headphones.",
        price: "₹2,499",
        discountPrice: "₹1,799",
        priceNum: 2499,
        discountPriceNum: 1799,
        images: [boat203_1, boat203_2, boat203_3, boat203_4],
        featured: true,
        category: "Headphones",
    },
    {
        id: 16,
        name: "JBL Endurance Dive",
        brand: "JBL",
        desc: "Waterproof sports earbuds.",
        price: "₹1,999",
        discountPrice: "₹1,499",
        priceNum: 1999,
        discountPriceNum: 1499,
        images: [jblEnd1, jblEnd2, jblEnd3, jblEnd4],
        featured: false,
        category: "Earphones",
    },
    {
        id: 17,
        name: "Sony WI-C200",
        brand: "Sony",
        desc: "Neckband style wireless headphones.",
        price: "₹2,490",
        discountPrice: "₹1,999",
        priceNum: 2490,
        discountPriceNum: 1999,
        images: [sony2, sony3, sony4],
        featured: false,
        category: "Neckbands",
    },
    {
        id: 18,
        name: "boAt Rockerz 450",
        brand: "BoAt",
        desc: "Over-ear wireless headphones.",
        price: "₹2,999",
        discountPrice: "₹1,999",
        priceNum: 2999,
        discountPriceNum: 1999,
        images: [boat1, boat2, boat3, boat4],
        featured: true,
        category: "Headphones",
    },
    {
        id: 19,
        name: "JBL Quantum 400",
        brand: "JBL",
        desc: "Gaming headset with immersive sound.",
        price: "₹6,999",
        discountPrice: "₹5,499",
        priceNum: 6999,
        discountPriceNum: 5499,
        images: [jbl1, jbl2, jbl3, jbl4],
        featured: true,
        category: "Headphones",
    },
];

export default products;