import { Avatar, Button, Group, Hint, Stack, Typography } from "@/components";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { css } from "panda/css";

export const ProfileButton = async () => {

    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error || !user) {
        return (
            <Link href={"/auth"}>
                <Button>Iniciar Sesion</Button>
            </Link>
        )
    }

    const usernameByMetadata = user.user_metadata.full_name || user.user_metadata.name;
    const avatarUrl = user.user_metadata.avatar_url;

    return (
        <Button
            className={css({ paddingInline: 2, paddingBlock: 1 })}
            size={"auto"}
            variant={"ghost"}
            rounded={"lg"}>
            <Group>
                <Avatar src={avatarUrl} fallback={usernameByMetadata[0]}/>

                <Stack>
                    <Hint>Buenos días,</Hint>
                    <Typography role="callout" emphasized>{usernameByMetadata}</Typography>
                </Stack>
            </Group>
        </Button>
    )
}