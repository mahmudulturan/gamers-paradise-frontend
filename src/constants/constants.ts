import codLogo from '@/assets/images/home/top-games/codm-wl_178x178.jpg'
import fcLogo from '@/assets/images/home/top-games/fc_mobile_tile.jpg'
import ffLogo from '@/assets/images/home/top-games/free_fire_new_tile.png'
import mlbbLogo from '@/assets/images/home/top-games/mlbb_tile_apr2024.png'
import pubgLogo from '@/assets/images/home/top-games/pubgm_rps_tile.jpg'
import userLogo from '@/assets/images/logo/userLogo.png'
import { IGame, ITestimonial } from '@/types/types'

export const topGames: IGame[] = [
    {
        name: "EA SPORTS FC Mobile",
        logo: fcLogo,
        route: "/ea-sports-fc-mobile"
    },
    {
        name: "PUBG Mobile",
        logo: pubgLogo,
        route: "/pubg-mobile"
    },
    {
        name: "Mobile Legends",
        logo: mlbbLogo,
        route: "/mobile-legends"
    },
    {
        name: "Free Fire",
        logo: ffLogo,
        route: "/free-fire"
    },
    {
        name: "Call of Duty",
        logo: codLogo,
        route: "/call-of-duty"
    }
];


export const testimonials: ITestimonial[] = [
    {
        image: userLogo,
        name: "John Doe",
        gameName: "EA SPORTS FC Mobile",
        gameLogo: fcLogo,
        reviewText: "Amazing service! I topped up my EA SPORTS FC Mobile account and got my credits instantly. Highly recommended!",
        rating: 5
    },
    {
        image: userLogo,
        name: "Alice Smith",
        gameName: "PUBG Mobile",
        gameLogo: pubgLogo,
        reviewText: "Quick and easy top-up process. I got the in-game currency I needed in PUBG Mobile without any hassle.",
        rating: 4.5
    },
    {
        image: userLogo,
        name: "Emily Johnson",
        gameName: "Mobile Legends",
        gameLogo: mlbbLogo,
        reviewText: "Great support team! They helped me resolve an issue with my top-up quickly and efficiently in Mobile Legends.",
        rating: 4.8
    },
    {
        image: userLogo,
        name: "Michael Brown",
        gameName: "Free Fire",
        gameLogo: ffLogo,
        reviewText: "Top-notch service! The top-up process was smooth, and I received my credits without any delays in Free Fire.",
        rating: 4.7
    },
    {
        image: userLogo,
        name: "Sarah Wilson",
        gameName: "Call of Duty",
        gameLogo: codLogo,
        reviewText: "Fantastic experience! I've been using their top-up service for Call of Duty for months, and it's always reliable.",
        rating: 4.9
    },
    {
        image: userLogo,
        name: "David Lee",
        gameName: "EA SPORTS FC Mobile",
        gameLogo: fcLogo,
        reviewText: "Great selection of payment methods! Made my top-up process quick and convenient in EA SPORTS FC Mobile.",
        rating: 4.6
    },
    {
        image: userLogo,
        name: "Sophia Rodriguez",
        gameName: "PUBG Mobile",
        gameLogo: pubgLogo,
        reviewText: "Exceptional customer service! They went above and beyond to assist me with my top-up issue in PUBG Mobile.",
        rating: 4.8
    }
];
