import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { EthPrice } from './SubInfo'

const DetailBid = ({ bid }) => {
	return (
		<View
			style={{
				width: '100%',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingHorizontal: SIZES.base * 2,
				marginVertical: SIZES.base,
			}}
		>
			<Image
				source={bid.image}
				resizeMode='contain'
				style={{
					width: 48,
					height: 48,
				}}
			/>
			<View>
				<Text
					style={{
						fontFamily: FONTS.semiBold,
						fontSize: SIZES.small,
						color: COLORS.primary,
					}}
				>
					Bid placed by {bid.name}
				</Text>
				<Text
					style={{
						fontFamily: FONTS.regular,
						fontSize: SIZES.small - 2,
						color: COLORS.secondary,
						marginTop: 3,
					}}
				>
					{bid.date}
				</Text>
			</View>
			<EthPrice price={bid.price} />
		</View>
	)
}

export default DetailBid