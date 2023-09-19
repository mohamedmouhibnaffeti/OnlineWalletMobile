import  React, { useEffect, useState  } from 'react';
import * as Font from 'expo-font'
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import { Text,  Card, DataTable } from 'react-native-paper';
import * as Icons from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient';

export default function VendorHome () {
  const [fontsLoaded] = useFonts({
    AkayaTelivigala_Regular: require('../../assets/fonts/AkayaTelivigala-Regular.ttf')
  })

  const [page, setPage] = useState(0)
  const [numberOfItemsPerPage] = useState([2, 3, 4])
  const [ItemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPage[0])
  const [Transactions] = useState([
  {
    key: 1,
    sender_id: 55214332,
    reciever_id: 33214665,
    amount: 500,
    date: new Date()
  },
  {
    key: 2,
    sender_id: 55214332,
    reciever_id: 33214665,
    amount: 500,
    date: new Date()
  },
  {
    key: 3,
    sender_id: 11111111,
    reciever_id: 22222222,
    amount: 300,
    date: new Date()
  },
  {
    key: 4,
    sender_id: 98765432,
    reciever_id: 12345678,
    amount: 750,
    date: new Date()
  },
  {
    key: 5,
    sender_id: 55214332,
    reciever_id: 33214665,
    amount: 500,
    date: new Date()
  }
  ])

  const from = page * ItemsPerPage
  const to = Math.min((page + 1) * ItemsPerPage, Transactions.length)

  useEffect(()=>{
    setPage(0)
  }, [ItemsPerPage])

  const [Amount, SetAmount] = useState('1000')
  return (
    <View className="flex-1 items-center bg-slate-100">
      <LinearGradient colors={['#ff7756', '#ffa18b' ,'#ffad98']} locations={[0.05,0.6,1]} className="w-96 h-24 mt-3 rounded-lg" start={{x: 0.0, y: 0.25}} >
      <View className="flex-1 flex-row gap-4 ml-2 mt-0">
            <Text className="text-white font-bold text-xl">My wallet</Text>
            <Icons.WalletIcon color="white" size={32} />
      </View>
      <Text className="mb-5 self-center text-white font-bold text-l">
            {Amount} DT
      </Text>
      </LinearGradient>
      <View className="w-96 items-center justify-center h-14 mt-3 rounded-xl" style={{backgroundColor: 'white', borderWidth: 1 ,borderColor: '#f7e4b8'}}>
        <Text className="font-bold text-lg" >My Transactions</Text>
      </View>
      <DataTable style={{backgroundColor: 'white', marginTop: 12, width: 390, borderRadius: 15,borderWidth: 1 ,borderColor: '#f7e4b8'}}>
        <DataTable.Header>
          <DataTable.Title>Receiver</DataTable.Title>
          <DataTable.Title>Amount</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
        </DataTable.Header>
        { Transactions.slice(from, to).map((item)=>(
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.reciever_id}</DataTable.Cell>
            <DataTable.Cell>{item.amount} DT</DataTable.Cell>
            <DataTable.Cell>{item.date.toString()}</DataTable.Cell>
          </DataTable.Row>
        ))}
        <DataTable.Pagination 
          page={page}
          numberOfPages={Math.ceil(Transactions.length / ItemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${Transactions.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPage}
          numberOfItemsPerPage={ItemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
          selectPageDropdownLabel={'Rows per page'}
          paginationControlRippleColor='blue'
        />
      </DataTable>
    </View>
  )
}


/* <Card style={{ height: 128, width: 288, marginTop: 10 }}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1, borderRadius: 8, padding: 16 }}
        >
        <Card.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>My wallet</Text>
            <Icons.WalletIcon color="white" size={32} />
          </View>
          <Text style={{ color: 'white', alignSelf: 'center', marginTop: 3 }}>
            {Amount} DT
          </Text>
        </Card.Content>
      </LinearGradient>
    </Card> */