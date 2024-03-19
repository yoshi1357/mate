import {
  Heading,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import { memo, type FC, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { PrimaryButton } from '../atoms/button/PrimaryButton';
// import { useCreateUser } from '../../hooks/useCreateUser';
import { type CreateUserForm } from '../../types/api/createUserForm';
// import { LoadingPage } from './LoadingPage';
import { NameInput } from '../molecules/form/user/NameInput';
import { PasswordInput } from '../molecules/form/user/PasswordInput';
import { ConfirmPasswordInput } from '../molecules/form/user/ConfirmPasswordInput';
import { RadioInput } from '../molecules/form/user/RadioInput';
import { NumInput } from '../molecules/form/user/NumInput';
import { sexRadios } from '../../parts/SexRadios';
import { bloodTypeRadios } from '../../parts/BloodTypeRadios';
import { EmailInput } from '../molecules/form/user/EmailInput';
import { ContentInput } from '../molecules/form/user/ContentInput';
import { PhotosUpload } from '../molecules/form/user/ImageUploadInput';
import { SelectBoxInput } from '../molecules/form/user/SelectBoxInput';
import { bodyShapeSelects } from '../../parts/BodyShapeSelects';
import { residenceSelects } from '../../parts/ResidenceSelects';
import { holidaySelects } from '../../parts/HolidaySelects';
import { workSelects } from '../../parts/WorkSelects';

// https://qiita.com/pkino/items/79a18a0bd518bf2660bd
// 上記サイトを参考に追加の処理が必要
export const UserCreatePage: FC = memo(() => {
    // const { createUser, isLoading, message } = useCreateUser();
		const [photos, setPhotos] = useState<File[]>([]);

		const methods = useForm<CreateUserForm>({
      mode: 'onBlur',
			defaultValues: { age: 28, height: 170 }
		});

		const onSubmit = methods.handleSubmit((userCreateFormData) => {
			// 画像データを追加
			photos.forEach((photoData) => {
				userCreateFormData.image = { name: photoData.name, data: photoData };
			});
			console.log(userCreateFormData);
		});

		// if (isLoading) {
		// 	return (
		// 		<LoadingPage />
		// 	)
		// }

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
								<RadioInput radioList={sexRadios} labelText='性別' label='sex' required={true} />
								{/* 血液型 */}
								<RadioInput radioList={bloodTypeRadios} labelText='血液型' label='bloodType' required={false} />
								{/* 年齢 */}
								<NumInput label="age" labelText='年齢' min={18} max={100} required={true} />
								{/* 身長 */}
								<NumInput label="height" labelText='身長(cm)' min={100} max={200} required={true} />
								{/* 体型 */}
								<SelectBoxInput selectList={bodyShapeSelects} labelText='体型' label='bodyShape' required={false} />
								{/* 居住地 */}
								<SelectBoxInput selectList={residenceSelects} labelText='居住地' label='residence' required='入力が必須の項目です。' />
								{/* 出身地 */}
								<SelectBoxInput selectList={residenceSelects} labelText='出身地' label='birthPlace' required='入力が必須の項目です。' />
								{/* 休日 */}
								<SelectBoxInput selectList={holidaySelects} labelText='休み' label='holiday' required='入力が必須の項目です。' />
								{/* 職業 */}
								<SelectBoxInput selectList={workSelects} labelText='職業' label='work' required='入力が必須の項目です。' />
								<Spacer />
								<PrimaryButton type="submit" disabled={!methods.formState.isValid} loading={isLoading} onClick={onSubmit}>
									送信
								</PrimaryButton>
							</VStack>
						</form>
					</FormProvider>
        </VStack>
    )
})
