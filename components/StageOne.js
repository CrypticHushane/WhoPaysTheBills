import React, {useContext} from 'react'
import { StyleSheet, View} from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import {Input, Button, ListItem, Text, Icon} from 'react-native-elements'
import { MyContext } from '../context';



const StageOne = () => {

    const context = useContext(MyContext);

    const renderPlayers = () => (
        context.state.players.map((item, i) => (
            <ListItem 
                key={i} 
                bottomDivider
                onLongPress={() => context.removePlayer(i)}
            >
              <Icon name='user' type='antdesign'/>
              <ListItem.Content>
                <ListItem.Title>{item}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
    )
    return (
        <>
            <Formik
                initialValues={{ player: '' }}
                validationSchema={Yup.object({
                    player: Yup.string()
                    .min(3, 'Name affi more than 2 characters still enuh Boss!')
                    .max(15, 'Yo boss yuh name too long')
                    .required('Suh yuh nah enter yuh name bredda?')
                })}
                onSubmit={(values,{resetForm}) => {
                    context.addPlayer(values.player)
                    resetForm()
                }}
            >

                {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (

                <>
                    <Input
                        placeholder="Add yuh name fi me please"
                        leftIcon={{type:'antdesign', name:'adduser'}}
                        inputContainerStyle={{
                            marginTop:50,
                            marginHorizontal:30,
                        }}
                        renderErrorMessage={errors.player && touched.player}
                        errorMessage={errors.player}
                        errorStyle={{
                            color: 'red',
                            marginHorizontal:30,
                            fontSize:15,
                            textTransform: 'uppercase'
                        }}
                       onChangeText={handleChange('player')}
                       onBlur={handleBlur('player')}
                       value={values.player}
                    />

                    <Button 
                        buttonStyle={styles.button}
                        onPress={handleSubmit} 
                        title="Add Player" 
                    />

                </>

                )}

            </Formik>
            <View style={{padding: 20, width:'100%'}}>
            {
                context.state.players && context.state.players.length > 0 ?
                <>
                    <Text>List of Players</Text>
                    {renderPlayers()}
                    <Button 
                        buttonStyle={{
                            marginTop: 15,
                            backgroundColor: 'purple'
                        }}

                        title='Generate Loser'

                        onPress={() => context.getLoser()}
                    />
                </>
                :
                <Text>No player is here umbre</Text>
            }
            </View>
        </>
        
    )
}

export default StageOne

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'purple',
        marginTop: 20
    }
})

