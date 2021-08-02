export const AvatarStyle = ["Circle", "Transparent"];

export const AvatarTop = [
  "NoHair",
  "Eyepatch",
  "Hat",
  "Hijab",
  "Turban",
  "WinterHat1",
  "WinterHat2",
  "WinterHat3",
  "WinterHat4",
  "LongHairBigHair",
  "LongHairBob",
  "LongHairBun",
  "LongHairCurly",
  "LongHairCurvy",
  "LongHairDreads",
  "LongHairFrida",
  "LongHairFro",
  "LongHairFroBand",
  "LongHairNotTooLong",
  "LongHairShavedSides",
  "LongHairMiaWallace",
  "LongHairStraight",
  "LongHairStraight2",
  "LongHairStraightStrand",
  "ShortHairDreads01",
  "ShortHairDreads02",
  "ShortHairFrizzle",
  "ShortHairShaggyMullet",
  "ShortHairShortCurly",
  "ShortHairShortFlat",
  "ShortHairShortRound",
  "ShortHairShortWaved",
  "ShortHairSides",
  "ShortHairTheCaesar",
  "ShortHairTheCaesarSidePart",
];

export const AvatarAccessories = [
  "Blank",
  "Kurt",
  "Prescription01",
  "Prescription02",
  "Round",
  "Sunglasses",
  "Wayfarers",
];

export const AvatarFacialHair = [
  "Blank",
  "BeardMedium",
  "BeardLight",
  "BeardMajestic",
  "MoustacheFancy",
  "MoustacheMagnum",
];
export const AvatarFacialHairColor = [
  "Auburn",
  "Black",
  "Blonde",
  "BlondeGolden",
  "Brown",
  "BrownDark",
  "Platinum",
  "Red",
];
export const AvatarClothes = [
  "BlazerShirt",
  "BlazerSweater",
  "CollarSweater",
  "GraphicShirt",
  "Hoodie",
  "Overall",
  "ShirtCrewNeck",
  "ShirtScoopNeck",
  "ShirtVNeck",
];
export const AvatarColorFabric = [
  "Black",
  "Blue01",
  "Blue02",
  "Blue03",
  "Gray01",
  "Gray02",
  "Heather",
  "PastelBlue",
  "PastelGreen",
  "PastelOrange",
  "PastelRed",
  "PastelYellow",
  "Pink",
  "Red",
  "White",
];
export const AvatarGraphic = [
  "Bat",
  "Cumbia",
  "Deer",
  "Diamond",
  "Hola",
  "Pizza",
  "Resist",
  "Selena",
  "Bear",
  "SkullOutline",
  "Skull",
];

export const AvatarEyes = [
  "Close",
  "Cry",
  "Default",
  "Dizzy",
  "EyeRoll",
  "Happy",
  "Hearts",
  "Side",
  "Squint",
  "Surprised",
  "Wink",
  "WinkWacky",
];

export const AvatarEyebrow = [
  "Angry",
  "AngryNatural",
  "Default",
  "DefaultNatural",
  "FlatNatural",
  "RaisedExcited",
  "RaisedExcitedNatural",
  "SadConcerned",
  "SadConcernedNatural",
  "UnibrowNatural",
  "UpDown",
  "UpDownNatural",
];

export const AvatarMouth = [
  "Concerned",
  "Default",
  "Disbelief",
  "Eating",
  "Grimace",
  "Sad",
  "ScreamOpen",
  "Serious",
  "Smile",
  "Tongue",
  "Twinkle",
  "Vomit",
];

export const AvatarSkin = [
  "Tanned",
  "Yellow",
  "Pale",
  "Light",
  "Brown",
  "DarkBrown",
  "Black",
];

const generateRandomNumber = (length: number): number => {
  return Math.floor(Math.random() * length);
};

export const generateRandomAvatarUrl = (
  avatarStyle: string = AvatarStyle[1]
): string => {
  const avatarUrl = new URL("https://avataaars.io/");
  avatarUrl.searchParams.append("avatarStyle", avatarStyle);
  avatarUrl.searchParams.append(
    "topType",
    AvatarTop[generateRandomNumber(AvatarTop.length)]
  );
  avatarUrl.searchParams.append(
    "facialHairType",
    AvatarFacialHair[generateRandomNumber(AvatarFacialHair.length)]
  );
  avatarUrl.searchParams.append(
    "clotheType",
    AvatarClothes[generateRandomNumber(AvatarClothes.length)]
  );
  avatarUrl.searchParams.append(
    "clotheColor",
    AvatarColorFabric[generateRandomNumber(AvatarColorFabric.length)]
  );
  avatarUrl.searchParams.append(
    "graphicType",
    AvatarGraphic[generateRandomNumber(AvatarGraphic.length)]
  );
  avatarUrl.searchParams.append(
    "eyeType",
    AvatarEyes[generateRandomNumber(AvatarEyes.length)]
  );
  avatarUrl.searchParams.append(
    "eyebrowType",
    AvatarEyebrow[generateRandomNumber(AvatarEyebrow.length)]
  );
  avatarUrl.searchParams.append(
    "mouthType",
    AvatarMouth[generateRandomNumber(AvatarMouth.length)]
  );
  avatarUrl.searchParams.append(
    "skinColor",
    AvatarSkin[generateRandomNumber(AvatarSkin.length)]
  );
  return avatarUrl.href;
};
