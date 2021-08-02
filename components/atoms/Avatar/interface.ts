import { generateRandomAvatarUrl } from "utils";

export default interface IAvatar {
  url?: string;
  alt?: string;
}

export const defaultProps = {
  url: generateRandomAvatarUrl(),
  alt: "Avatar",
};
