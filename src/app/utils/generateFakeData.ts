import { constants } from "@app/core/constants/settings"

export const fetchNewFakeUser = async () => {
    return await fetch(constants.RANDOM_USER_API).then(res => res.json());
}