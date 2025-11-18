
import { LuckyLetter } from './types';

const createFinalPrompt = (theme: string): string => {
  return `Generate a realistic, real-life style photograph of the two people (parent and child) from the provided image.
**Crucially, you MUST preserve their exact facial features and identities, but you can change their expressions and poses to match the scene.**
The scene's theme is: "${theme}".
The overall mood should be happy, warm, and celebratory, fitting for the Vietnamese Tet holiday.
The style must be photorealistic, as if taken with a modern camera.
**MANDATORY REQUIREMENT: You MUST include a Pepsi can or bottle in the scene. It should be clearly visible, naturally placed (e.g., on a table or being held), and look like a natural part of the celebration. Ensure the Pepsi product is fully visible and not cut off or obscured.**
Do not add any text overlays, watermarks, or logos to the image itself.
The output image must have the same number of people as the input image (two people: one parent, one child).
Ensure the final image is high quality and resolution.`;
};

export const LUCKY_LETTERS: LuckyLetter[] = [
  { value: 'T', label: 'T - Thêm nữa đi con', description: 'A cozy family meal', textOverlay: 'Thêm nữa đi con', getPrompt: () => createFinalPrompt("A cozy, happy family meal during Tet. The scene should show the family gathered around a table laden with traditional Tet holiday food like 'bánh chưng', 'giò', and 'dưa hành'. Everyone should look joyful and engaged in the meal.") },
  { value: 'B', label: 'B - Bên nồi bánh chưng', description: 'Cooking Banh Chung together', textOverlay: 'Bên nồi bánh chưng', getPrompt: () => createFinalPrompt("The family is having fun cooking 'Bánh chưng' together. Place the family outdoors or in a traditional kitchen setting around a large, simmering pot. Show them laughing and working together, with stacks of 'lá dong' (phrynium leaves) and other ingredients nearby. The atmosphere should be warm and communal.") },
  { value: 'Đ', label: 'Đ - Được chiều như tiên', description: 'A moment of happy affection', textOverlay: 'Được chiều như tiên', getPrompt: () => createFinalPrompt("Pure happiness and affection. Depict a parent (mother or father) playfully carrying their child (son or daughter) on their shoulders or lifting them up joyfully in their arms. Their expressions should be full of laughter and love. The background should be a beautiful Tet setting with peach blossoms.") },
  { value: 'P', label: 'P - Phá mẹ là chính', description: 'A fun prank with mom', textOverlay: 'Phá mẹ là chính', getPrompt: () => createFinalPrompt("The theme is a lighthearted, playful moment between a child and their mother. Show the child playfully riding a broomstick like a hobby horse, pretending to be a wizard or knight, and playing a fun, harmless prank on their mom. His mother should be reacting with amusement and laughter. The scene should be funny, appropriate, and heartwarming, set within a home decorated for Tet. Make sure both faces are clearly visible.") },
  { value: 'C', label: 'C - Chụp hình gia đình', description: 'A classic 90s family photo', textOverlay: 'Chụp hình gia đình', getPrompt: () => createFinalPrompt("A classic, traditional Vietnamese family picture from the 1990s. The family should be posed formally but happily. The background should be a typical 90s studio backdrop, perhaps with a painted landscape or ornate furniture. The image style should have a slightly vintage, nostalgic film feel with warm color tones.") },
  { value: 'S', label: 'S - Song kiếm hợp bích', description: 'Mother and child cooking', textOverlay: 'Song kiếm hợp bích', getPrompt: () => createFinalPrompt("A mother and her son/daughter preparing a Tet meal together, symbolizing teamwork ('Song kiếm hợp bích'). Show them in the kitchen, happily collaborating on a dish. One could be chopping vegetables while the other stirs a pot. The atmosphere should be one of bonding and shared tradition.") },
];