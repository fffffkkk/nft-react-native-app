import React from 'react'
import {
	Text,
	View,
	SafeAreaView,
	Image,
	StatusBar,
	FlatList,
} from 'react-native'
import {
	FocusedStatusBar,
	DetailDesc,
	DetailBid,
	DetailsHeader,
} from '../components'
import { SubInfo } from '../components/SubInfo'
import { CircleButton, RectButton } from '../components/UI/Button'
import { SHADOWS, SIZES, assets, FONTS, COLORS } from '../constants'

const Details = ({ route, navigation }) => {
	const { data } = route.params

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar
				barStyle='dark-content'
				backgroundColor='transparent'
				transLucent={true}
			/>
			<View
				style={{
					width: '100%',
					position: 'absolute',
					bottom: 0,
					paddingVertical: SIZES.font,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'rgba(255, 255, 255, 0.5)',
					zIndex: 1,
				}}
			>
				<RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
			</View>
			<FlatList
				data={data.bids}
				renderItem={({ item }) => <DetailBid bid={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
				ListHeaderComponent={() => (
					<>
						<DetailsHeader data={data} navigation={navigation} />
						<SubInfo />
						<View style={{ padding: SIZES.font }}>
							<DetailDesc data={data} />
							{data.bids.length > 0 && (
								<Text
									style={{
										fontSize: SIZES.font,
										fontFamily: FONTS.semiBold,
										color: COLORS.primary,
									}}
								>
									Current Bid
								</Text>
							)}
						</View>
					</>
				)}
			/>
		</SafeAreaView>
	)
}

export default Details
