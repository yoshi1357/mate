import {
  Heading,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import { memo, type FC, useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useCreateUser } from '../../hooks/useCreateUser';
import { type CreateUserForm } from '../../types/api/createUserForm';
import { LoadingPage } from './LoadingPage';
import { NameInput } from '../molecules/form/user/NameInput';
import { PasswordInput } from '../molecules/form/user/PasswordInput';
import { ConfirmPasswordInput } from '../molecules/form/user/ConfirmPasswordInput';
import { RadioInput } from '../molecules/form/user/RadioInput';
import { NumInput } from '../molecules/form/user/NumInput';
import { EmailInput } from '../molecules/form/user/EmailInput';
import { ContentInput } from '../molecules/form/user/ContentInput';
import { PhotosUpload } from '../molecules/form/user/ImageUploadInput';
import { SelectBoxInput } from '../molecules/form/user/SelectBoxInput';
import { useUserFormDateProvide } from '../../hooks/useUserFormDateProvide';

// https://qiita.com/pkino/items/79a18a0bd518bf2660bd
// 上記サイトを参考に追加の処理が必要
export const UserCreatePage: FC = memo(() => {
    const { createUser, isLoading: isCreatingUser } = useCreateUser();
	const { getUserFormDateProvide, userFormDateProvide, isLoading: isLoadingUserFormDataProvide } = useUserFormDateProvide();
	const [photos, setPhotos] = useState<File[]>([]);
	const methods = useForm<CreateUserForm>({
		mode: 'onBlur',
		defaultValues: { age: 28, height: 170 }
	});
	useEffect(() => {
		getUserFormDateProvide();
	}, [getUserFormDateProvide]);
	const onSubmit = methods.handleSubmit((userCreateFormData) => {
		// 画像データを追加
		userCreateFormData.images = photos;
		console.log(userCreateFormData);
		createUser(userCreateFormData);
	});

	if (isLoadingUserFormDataProvide || isCreatingUser) {
		return (
			<LoadingPage />
		)
	}

    return (
        <VStack bg='white' p={{ base: 4, md: 6 }} borderRadius='md'>
			<Heading as='h2'>会員登録</Heading>
			<FormProvider {...methods}>
				<form>
					<VStack spacing={{ base: 6, md: 8 }}>
						{/* ニックネーム */}
						<NameInput />
						{/* 自己紹介 */}
						<ContentInput />
						{/* メールアドレス */}
						<EmailInput />
						{/* プロフィール写真 */}
						<PhotosUpload photos={photos} setPhotos={setPhotos} />
						{/* パスワード */}
						<PasswordInput />
						{/* 確認用パスワード */}
						<ConfirmPasswordInput />
						{/* 性別 */}
						<RadioInput radioList={userFormDateProvide.sex_radios} labelText='性別' label='sex' required={true} />
						{/* 血液型 */}
						<RadioInput radioList={userFormDateProvide.blood_type_radios} labelText='血液型' label='blood_type' required={false} />
						{/* 年齢 */}
						<NumInput label="age" labelText='年齢' min={18} max={100} required={true} />
						{/* 身長 */}
						<NumInput label="height" labelText='身長(cm)' min={100} max={200} required={true} />
						{/* 体型 */}
						<SelectBoxInput selectList={userFormDateProvide.body_shape_selects} labelText='体型' label='body_shape' required={false} />
						{/* 居住地 */}
						<SelectBoxInput selectList={userFormDateProvide.residence_selects} labelText='居住地' label='residence' required='入力が必須の項目です。' />
						{/* 出身地 */}
						<SelectBoxInput selectList={userFormDateProvide.residence_selects} labelText='出身地' label='birth_place' required='入力が必須の項目です。' />
						{/* 休日 */}
						<SelectBoxInput selectList={userFormDateProvide.holiday_selects} labelText='休み' label='holiday' required='入力が必須の項目です。' />
						{/* 職業 */}
						<SelectBoxInput selectList={userFormDateProvide.work_selects} labelText='職業' label='work' required='入力が必須の項目です。' />
						<Spacer />
						<PrimaryButton type="submit" disabled={!methods.formState.isValid} loading={isCreatingUser} onClick={onSubmit}>
							送信
						</PrimaryButton>
					</VStack>
				</form>
			</FormProvider>
        </VStack>
    )
})
