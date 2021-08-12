import React, {useContext, useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import {Input, Button, ListItem, Text, Icon} from 'react-native-elements'
import { MyContext } from '../context';
import { useDispatch, useSelector} from 'react-redux'
import { getArticles } from '../store/actions'

const StageTwo = () => {
    const context = useContext(MyContext);
    // const articles = useSelector(state => state.articles);
    // const dispatch = useDispatch();

    
    // useEffect(() => {
    //     dispatch(getArticles())
    // }, [dispatch])

    // console.log(articles.posts);
    // const renderPosts = () => (
    //     articles.posts.map((item, i) => (
    //         <ListItem 
    //             key={i} 
    //             bottomDivider
    //         >
    //             {/* <Text>{item.body}</Text> */}
    //           <Icon name='user' type='antdesign'/>
    //           <ListItem.Content>
    //             <ListItem.Title>{item.title}</ListItem.Title>
    //           </ListItem.Content>
    //           <ListItem.Chevron />
    //         </ListItem>
    //       ))
    // )
    return (
        <>
            {/* <Text>{{articles}}</Text> */}
            <Text style={{fontSize:20, textTransform:'capitalize', margin:30}}>The Loser Is: </Text>
            <Text style={{fontSize:30, textTransform:'uppercase', margin:30}}>{context.state.result}</Text>
            <Button 
                title='Try Again' 
                onPress={() => context.tryAgain()} 
                buttonStyle={{
                            marginTop: 15,
                            backgroundColor: 'purple'
                }}
            />
            <Button 
                title='Start Over' 
                onPress={() => context.startOver()} 
                buttonStyle={{
                            marginTop: 15,
                            backgroundColor: 'purple'
                 }}
            />
            {/* {renderPosts()} */}
        </>
    )
}

export default StageTwo

const styles = StyleSheet.create({})
