import { css } from '@/styled-system/css';
import Image from 'next/image';

export function Logo() {
    return (
        <Image
            className={css({
                width: 'auto',
                height: 10,
            })}
            src="assets/logo-light.svg"
            alt="Logo"
            width={120}
            height={48}
        />
    );
}
