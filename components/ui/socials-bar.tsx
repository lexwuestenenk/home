import { Icons } from '@/components/Icons';
import Link from 'next/link';

export function SocialsBar() {
    return (
        <div className='flex justify-around p-5 text-text w-full text-3xl md:text-3xl lg:text-5xl z-10 sticky bottom-0 left-0'>
            <Link href="https://github.com/lexwuestenenk" target='_blank'>
                <Icons.Github className="ease-in duration-200 hover:text-background" />
            </Link>
            <Link href="https://discordapp.com/users/299901733943902208" target='_blank'>
                <Icons.Discord className="ease-in duration-200 hover:text-background" />
            </Link>
            <Link href="https://www.linkedin.com/in/lex-wuestenenk-0b0340294/?locale=nl_NL" target='_blank'>
                <Icons.LinkedIn className="ease-in duration-200 hover:text-background" />
            </Link>
            <Link href="https://twitter.com/lexwuestenenk" target='_blank'>
                <Icons.Twitter className="ease-in duration-200 hover:text-background" />
            </Link>
        </div>
    )
}