import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from './src/assets/icons/back-arrow.svg'
import Menu from './src/assets/icons/menu-icon.svg'
import Calendar from './src/assets/icons/calendar.svg'
import Bag from './src/assets/icons/bag.svg'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={.6} style={styles.headerButton} >
          <Back width={30} height={30} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Flash Sale</Text>
        </View>
		<TouchableOpacity activeOpacity={.6} style={styles.headerButton}>
          <Menu width={30} height={30} />
        </TouchableOpacity>
      </View>

	  <View style={styles.offer}>
		<View style={styles.left}>
			<View>
				<Text style={{fontSize: 24, color: '#000', fontWeight: 'bold'}}>New Arrivals</Text>
			</View>
			<View>
				<Text style={{fontSize: 14, color: '#EBA352', marginVertical: 10}}>Sales upto 60% off</Text>
			</View>
			<View style={styles.calender}>
				<Calendar width={20} height={20} />
				<Text style ={styles.date}>25-30 June</Text>
			</View>

		</View>
		<View style ={styles.right}>
			<Image style={styles.shoe} source={require("./src/assets/images/shoe.png")} />
		</View>

	  </View>
	  <ScrollView 
	    showsHorizontalScrollIndicator={false}
	    contentContainerStyle={{flexDirection : 'row', alignItems: 'flex-start'}}
		horizontal 
	>
			<View style = {styles.card}>
				<Text style={styles.cardTitle}>Electronics</Text>
			</View>
			<View style = {styles.card}>
				<Text style={styles.cardTitle}>Fashion</Text>
			</View>
			<View style = {styles.card}>
				<Text style={styles.cardTitle}>Sports</Text>
			</View>
			<View style = {styles.card}>
				<Text style={styles.cardTitle}>Electronics</Text>
			</View>
			<View style = {styles.card}>
				<Text style={styles.cardTitle}>Fashion</Text>
			</View>
			<View style = {styles.card}>
				<Text style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>Sports</Text>
			</View>
	  </ScrollView>

	  <ScrollView
	 	    showsVerticalScrollIndicator={false}
	  >
		<View style={styles.item}>
			<View style={styles.imageSection}>
				<Image style={styles.itemImage} source={require("./src/assets/images/shirt.jpg")} />
			</View>
			<View style={styles.detailSection}>
				<Text style={styles.itemTitle}>HoMen Regular Shirt</Text>
				<Text style={styles.realPrice}>$100.00</Text>
				<Text style={styles.offerPrice}>$50.00</Text>
				<View style={styles.soldContainer}>
					<View style={styles.sold}>
						<Text style={styles.soldNo}>346 Sold</Text>
					</View>
					<View style={styles.soldBalance}></View>
				</View>
			</View>
			<View style={styles.BuyContainer}  >
				<TouchableOpacity activeOpacity={.8} style={styles.BuyButton} >
				<Bag width={25} height={25} />
				<Text style={styles.buyTitle}>Buy</Text>
				</TouchableOpacity>
			</View>
		</View>

		<View style={styles.item}>
			<View style={styles.imageSection}>
				<Image style={styles.itemImage} source={require("./src/assets/images/bag.jpg")} />
			</View>
			<View style={styles.detailSection}>
				<Text style={styles.itemTitle}>HoMen Regular Shirt</Text>
				<Text style={styles.realPrice}>$100.00</Text>
				<Text style={styles.offerPrice}>$50.00</Text>
				<View style={styles.soldContainer}>
					<View style={styles.sold}>
						<Text style={styles.soldNo}>346 Sold</Text>
					</View>
					<View style={styles.soldBalance}></View>
				</View>
			</View>
			<View style={styles.BuyContainer}  >
				<TouchableOpacity activeOpacity={.8} style={styles.BuyButton} >
				<Bag width={25} height={25} />
				<Text style={styles.buyTitle}>Buy</Text>
				</TouchableOpacity>
			</View>
		</View>

		<View style={styles.item}>
			<View style={styles.imageSection}>
				<Image style={styles.itemImage} source={require("./src/assets/images/tshirt.jpg")} />
			</View>
			<View style={styles.detailSection}>
				<Text style={styles.itemTitle}>HoMen Regular Shirt</Text>
				<Text style={styles.realPrice}>$100.00</Text>
				<Text style={styles.offerPrice}>$50.00</Text>
				<View style={styles.soldContainer}>
					<View style={styles.sold}>
						<Text style={styles.soldNo}>346 Sold</Text>
					</View>
					<View style={styles.soldBalance}></View>
				</View>
			</View>
			<View style={styles.BuyContainer}  >
				<TouchableOpacity activeOpacity={.8} style={styles.BuyButton} >
				<Bag width={25} height={25} />
				<Text style={styles.buyTitle}>Buy</Text>
				</TouchableOpacity>
			</View>
		</View>

		<View style={styles.item}>
			<View style={styles.imageSection}>
				<Image style={styles.itemImage} source={require("./src/assets/images/shoe.jpg")} />
			</View>
			<View style={styles.detailSection}>
				<Text style={styles.itemTitle}>HoMen Regular Shirt</Text>
				<Text style={styles.realPrice}>$100.00</Text>
				<Text style={styles.offerPrice}>$50.00</Text>
				<View style={styles.soldContainer}>
					<View style={styles.sold}>
						<Text style={styles.soldNo}>346 Sold</Text>
					</View>
					<View style={styles.soldBalance}></View>
				</View>
			</View>
			<View style={styles.BuyContainer}  >
				<TouchableOpacity activeOpacity={.8} style={styles.BuyButton} >
				<Bag width={25} height={25} />
				<Text style={styles.buyTitle}>Buy</Text>
				</TouchableOpacity>
			</View>
		</View>
	  </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
	container :{
		flex :1,
		paddingHorizontal : 20,
		paddingVertical : 15
	},
	header :{
		flexDirection: 'row',
		justifyContent:'space-between',
		alignItems: 'center',
		marginBottom : 20
		
	},
	title:{
		fontSize: 20,
		color : '#000',
		fontWeight: 'bold'

	},
	offer:{
		flexDirection: 'row',
		width: '100%',
		backgroundColor: '#FBE8E7',
		paddingVertical: 25,
		paddingHorizontal:20,
		position : 'relative',
		borderRadius : 15,
		marginBottom: 50




	},
	left :{

	},
	right :{
		
		
	},
	shoe :{
		width: 170,
		height: 150,
		position : 'absolute',
		bottom: -50,
		left: 0
		
	},
	calender : {
		flexDirection:'row',
		borderRadius: 30,

		padding : 15,
		backgroundColor : '#fff',



	},
	date : {
		marginLeft : 15,
		color: '#000',
		fontWeight: 'bold',
	},
	card :{
		height: 40,
		paddingHorizontal : 15,
		borderRadius : 30,
		borderWidth : 1,
		marginRight : 15,
		alignItems:'center',
		justifyContent: 'center',
		marginBottom: 50
	

	},
	cardTitle :{
		fontSize: 15,
		color: '#000',
		fontWeight: 'bold',
	},
	item:{
		flexDirection : 'row',
		marginVertical: 20,

	},
	imageSection:{

	},
	itemImage:{
		width: 80,
		height: 130,
		borderRadius: 8,

	},
	detailSection:{
		marginLeft:15,




	},
	itemTitle:{
		fontWeight:'bold',
		color : '#000',
		fontSize: 16,
		marginBottom: 20,


	},
	realPrice:{
		textDecorationLine:'line-through',
		fontSize:14,
	},
	offerPrice:{
		fontSize:20,
		color: '#EBA352',
		marginBottom: 10


	},
	soldContainer:{
		backgroundColor : '#F0F0F0',
		borderRadius : 30,
	

		


	},
	sold:{
		width: '70%',
		backgroundColor : '#333333',
		borderTopLeftRadius: 30,
		borderBottomLeftRadius : 30
		
	},
	soldNo:{
		textAlign: 'center',
		color: '#F0F0F0',
		padding : 4,
		fontSize:12,
	},
	soldBalance:{

		width: '30%'
	},
	BuyContainer:{

		justifyContent : 'center'
		
	



	},
	BuyButton:{
		backgroundColor : '#333333',
		flexDirection: 'row',
		padding : 10,
		paddingHorizontal: 13,
		borderRadius : 25,
		alignItems:'center',
		justifyContent: 'center'
	},
	buyTitle:{
		color: '#fff',
		marginLeft : 15,
	},
})