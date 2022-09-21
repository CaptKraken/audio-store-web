export const about = [
  {
    text: "Company",
    link: "/about",
  },
  {
    text: "How to buy",
    link: "/blog/how-to-buy",
  },
  {
    text: "Support",
    link: "/support",
  },
];

export const categories = [
  {
    text: "Earphone",
    link: "/shop?category=earphone",
    imageUrl: "/products/marshall-minor-ii.webp",
  },
  {
    text: "Headphone",
    link: "/shop?category=headphone",
    imageUrl: "/products/marshall-major-iii-bt-black-01.webp",
  },
  {
    text: "Speaker",
    link: "/shop?category=speaker",
    imageUrl: "/products/marshall-kilburn-ii.png",
  },
  {
    text: "Soundbar",
    link: "/shop?category=soundbar",
    imageUrl: "/products/jbl-bar-5.1.webp",
  },
  {
    text: "Accessory",
    link: "/shop?category=accessory",
    imageUrl: "/products/tactsuit-x-audio-accessories.webp",
  },
];
export const brands = [
  {
    text: "Anker",
    link: "/shop?brand=anker",
  },
  {
    text: "JBL",
    link: "/shop?brand=jbl",
  },
  {
    text: "Bose",
    link: "/shop?brand=bose",
  },
  {
    text: "Sony",
    link: "/shop?brand=sony",
  },
  {
    text: "Marshall",
    link: "/shop?brand=marshall",
  },
  {
    text: "Maono",
    link: "/shop?brand=maono",
  },
  {
    text: "Samsung",
    link: "/shop?brand=samsung",
  },
  {
    text: "Apple",
    link: "/shop?brand=apple",
  },
];

export const navigationLinks = [
  {
    text: "Home",
    link: "/",
  },
  ...categories,
];

export const profileLinks = [
  {
    text: "View Profile",
    link: "/me",
  },
  {
    text: "My Wishlist",
    link: "/wishlist",
  },
  {
    text: "View Orders",
    link: "/orders",
  },
  {
    text: "Payment Method",
    link: "/payments",
  },
  {
    text: "Delivery Infomation",
    link: "/delivery",
  },
];

const links = {
  about,
  categories,
  brands,
  navigationLinks,
  profileLinks,
};
export default links;
