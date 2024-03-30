// PhotosUpload.tsx
import React from 'react';
import {
	Badge,
  Box,
  Button,
  FormLabel,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

interface PhotosUploadProps {
  photos: File[]
  setPhotos: (files: File[]) => void
}

export const PhotosUpload: React.FC<PhotosUploadProps> = ({ photos, setPhotos }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // if (!event.target.files) return;

    const newFiles = Array.from(event.target.files);
    const allFiles = [...photos, ...newFiles].slice(0, 3); // 保持するファイル数を最大3に制限
    setPhotos(allFiles);
  };

  const handleRemovePhoto = (index: number): void => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  return (
    <VStack>
      {photos.map((photo, index) => (
        <Box key={index} position="relative" width="200px" height="200px">
          <Image
            src={URL.createObjectURL(photo)}
            alt={`アップロードされた画像 ${index + 1}`}
            boxSize="100%"
            objectFit="cover"
          />
          <Button
            position="absolute"
            top="1"
            right="1"
            size="xs"
            onClick={() => handleRemovePhoto(index)}
          >
            削除
          </Button>
        </Box>
      ))}
			<FormLabel htmlFor="image">
				<Badge mr={2}>任意</Badge>
				プロフィール写真
			</FormLabel>
      <Text>{photos.length}/3 枚</Text>
      <Input
				id="image"
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        disabled={photos.length >= 3}
      />
      {photos.length >= 3 && (
        <Text color="red.500">最大3枚までアップロードできます。</Text>
      )}
    </VStack>
  );
};
