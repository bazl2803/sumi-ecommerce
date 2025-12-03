import { Avatar, Button, ButtonLabel, Dropdown, DropdownContent, DropdownTrigger, Toolbar } from '@/components'
import Image from 'next/image'
import { css } from 'panda/css'
import { ProfileButton } from "@/app/(frontend)/_components/profile-button";

export const EcommerceToolbar = async () => {


    return (
        <Toolbar>
            <div>
                <Image
                    className={css({
                        width: 'auto',
                        height: '40px',
                        objectFit: 'contain',
                    })}
                    src={'/logo-white.svg'}
                    alt="logo"
                    width={100}
                    height={100}
                />
            </div>

            <ProfileButton />
        </Toolbar>
    )
}
