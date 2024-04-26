import codLogo from '@/assets/images/home/top-games/codm-wl_178x178.jpg'
import fcLogo from '@/assets/images/home/top-games/fc_mobile_tile.jpg'
import ffLogo from '@/assets/images/home/top-games/free_fire_new_tile.png'
import mlbbLogo from '@/assets/images/home/top-games/mlbb_tile_apr2024.png'
import pubgLogo from '@/assets/images/home/top-games/pubgm_rps_tile.jpg'
import { IGame } from '@/types/types'

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
