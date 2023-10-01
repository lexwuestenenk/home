import { ReactNode } from "react";
import {
    FaChevronRight, FaDiscord, FaGithub, FaLink, FaLinkedin, FaTwitter,
} from 'react-icons/fa'

export type Icon = ReactNode

export const Icons = {
    ChevronRight: FaChevronRight,
    Link: FaLink,
    Twitter: FaTwitter,
    LinkedIn: FaLinkedin,
    Github: FaGithub,
    Discord: FaDiscord
}