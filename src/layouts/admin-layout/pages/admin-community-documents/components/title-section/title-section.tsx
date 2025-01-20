import { type FC } from 'react'

import cn from 'classnames'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/layouts/admin-layout/components/admin-section/admin-section'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import communityDocStyles from 'src/layouts/admin-layout/pages/admin-community-documents/index.module.scss'
export const TitleSection: FC = () => {
	return (
		<AdminSection
			titleText='Заглавный текст'
			contentBg='none'
			contentPadding='0'
			contentBorder='none'
		>
			<ControlledInput
				className={cn(adminStyles.adminMainInput, communityDocStyles.communityDocTextarea)}
				name='titleText'
				label='Заглавный текст'
				margin='0'
				isTextarea
			/>
		</AdminSection>
	)
}
