import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { KoroCard, KoroAlert, KoroCollapse, KoroButton, KoroModal, KoroToast, KoroPopover, KoroProgress, KoroSteps } from 'rn-koro-lib'
import { ScrollView } from 'react-native-gesture-handler';

export const InfoComponentsScreen = (props) => {

    const [callAlert, setCallAlert] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [stepsOpen, setStepsOpen] = useState(false)
    const [popOpen, setPopOpen] = useState(false)
    const [toast, setToast] = useState(null);
    const [progressActive, setProgressActive] = useState(false)

    const tryToast = () => {
        setToast(<KoroToast 
            time={1000} 
            title='im a toast'
            position='bottom'
            style={{textTransform: 'uppercase', color: 'black'}}
            />)
        setTimeout(()=>{
          setToast(null)
        }, 1500)
    }

    const showProgress = () => {
        setProgressActive(true);
        setTimeout(()=>{
          setProgressActive(false)
        }, 2000)
    }
    
    const alertHeader = () => (
        <View>
          <Text style={styles.title}>Alert</Text>
        </View>
    );
    const alertCode = '<KoroAlert message="Alert message" visible={boolean} confirmButton={{onPress: () => doSomething(), textStyle: {}} cancelButton={{onPress: () => doSomething(), textStyle: {}}} />'
    const alertFooter = () => (
        <KoroCollapse title='Show code'>
            <View style={[{backgroundColor: 'LightGrey'}]}>
                <Text> {alertCode} </Text>
                <Text> Props: </Text>
                <Text> message: set the message for the alert. </Text>
                <Text> visible: a boolean that sets whether the alert is visible. </Text>
                <Text> confirmButton: an object that has onPress property and textStyle for styling the text on the confirm button. </Text>
                <Text> deleteButton: an object that has onPress property and textStyle for styling the text on the delete button. </Text>
            </View>
        </KoroCollapse>
        );
    
    const modalHeader = () => (
        <View>
          <Text style={styles.title}>Modal</Text>
        </View>
    );
    const modalCode = '<KoroModal visible={boolean} borderStyle={{padding: 20}} onRequestClose={()=> setVisibility(false)}> the content goes here </KoroModal>'
    const modalFooter = () => (
    <KoroCollapse title='Show code'>
        <View style={[{backgroundColor: 'LightGrey'}]}>
            <Text> {modalCode} </Text>
            <Text> Props: </Text>
            <Text> visible: a boolean that sets whether the modal is visible. </Text>
            <Text> onRequestClose: the function triggered when the user attempts to close the modal. </Text>
            <Text> borderStyle: custom style for the modal borders. </Text>
        </View>
    </KoroCollapse>
    );


    const toastHeader = () => (
        <View>
          <Text style={styles.title}>Toast</Text>
        </View>
    );
    const toastCode = "<KoroToast time={duration} title='toast title' position='position' style={customStyle}/>)"
    const toastFooter = () => (
    <KoroCollapse title='Show code'>
        <View style={[{backgroundColor: 'LightGrey'}]}>
            <Text> {toastCode} </Text>
            <Text> Props: </Text>
            <Text> time: duration of the toast in miliseconds. </Text>
            <Text> title: title of the toast. </Text>
            <Text> position: the position in which the toast will be shown. </Text>
            <Text> style: custom style for the toast component. </Text>
        </View>
    </KoroCollapse>
    );


    const popoverHeader = () => (
        <View>
          <Text style={styles.title}>Popover</Text>
        </View>
    ); 
    const popoverCode = "<KoroPopover visible={boolean} title='title' content='text content'> Button goes here </KoroPopover >"
    const popoverFooter = () => (
        <KoroCollapse title='Show code'>
            <View style={[{backgroundColor: 'LightGrey'}]}>
                <Text> {popoverCode} </Text>
                <Text> Props: </Text>
                <Text> visible: a boolean that sets whether the popover is visible. </Text>
                <Text> title: title of the popover. </Text>
                <Text> content: a string which is the message of the popover. </Text>
            </View>
        </KoroCollapse>
      );

    const progressHeader = () => (
        <View>
          <Text style={styles.title}>Progress</Text>
        </View>
    ); 
    const progressCode = "<KoroProgress visible={boolean}/>"
    const progressFooter = () => (
    <KoroCollapse title='Show code'>
        <View style={[{backgroundColor: 'LightGrey'}]}>
            <Text> {progressCode} </Text>
            <Text> Props: </Text>
            <Text> visible: a boolean that sets whether the progress is visible. </Text>
        </View>
    </KoroCollapse>
    );

    const stepsHeader = () => (
        <View>
          <Text style={styles.title}>Steps</Text>
        </View>
    ); 
    const stepsCode = "<KoroSteps steps={['Step number 1', 'Step number 2', 'Step number 3', 'Step number 4', 'Step number 5']} onDone={props.onDone}/>"
    const stepsFooter = () => (
        <KoroCollapse title='Show code'>
            <View style={[{backgroundColor: 'LightGrey'}]}>
                <Text> {stepsCode} </Text>
                <Text> steps: an array of the content of each step, it can be jsx also</Text>
                <Text> onDone: function to be exectuted at the end of the steps </Text>
            </View>
        </KoroCollapse>
    )

    const collapseHeader = () => (
        <View>
          <Text style={styles.title}>Collapse</Text>
        </View>
    ); 
    const collapseCode = "<KoroCollapse title='Show code'><View style={[{backgroundColor: 'LightGrey'}]}><Text> {collapseCode} </Text> <Text> Props: </Text><Text> visible: a boolean that sets whether the progress is visible. </Text></View></KoroCollaps "
    const collapseFooter = () => (
        <KoroCollapse title='Show code'>
            <View style={[{backgroundColor: 'LightGrey'}]}>
                <Text> {collapseCode} </Text>
                <Text> Title: shows the title of the collapse</Text>
                <Text> Children: to be shown in the collapse </Text>
            </View>
        </KoroCollapse>
    );

    return(
        <View>
            <ScrollView>
                <KoroCard header={alertHeader} footer={alertFooter}>
                    <View>
                        <KoroAlert
                            visible={callAlert}
                            confirmButton={{
                                onPress: () => setCallAlert(false)
                                ,
                                textStyle: {
                                color: 'black'
                                }
                            }}
                            cancelButton={{
                                onPress: ()=> setCallAlert(false)
                            }}
                        />
                        <KoroButton title="Call alert" onPress={() => setCallAlert(true)} buttonStyle={{backgroundColor: 'blue', minWidth: 200}} textStyle={{color: 'white'}} />
                    </View>
                </KoroCard>

                <KoroCard header={modalHeader} footer={modalFooter}>
                    <View>
                        <KoroModal visible={modalOpen} borderStyle={{padding: 20}} onRequestClose={()=> setModalOpen(false)}>
                            <Text> This is a modal. </Text>
                            <KoroButton title="Press to close" onPress={()=> setModalOpen(false)} buttonStyle={{minWidth: 200, backgroundColor: 'red'}} textStyle={{color: 'white'}}/>
                        </KoroModal>
                        <KoroButton title="Open Modal" onPress={()=> setModalOpen(true)} buttonStyle={{backgroundColor: 'blue', minWidth: 200}} textStyle={{color: 'white'}}/>
                    </View>
                </KoroCard>

                <KoroCard header={toastHeader} footer={toastFooter}>
                    <View>
                        <KoroButton title='Call toast' onPress={tryToast} buttonStyle={{backgroundColor: 'blue', minWidth: 200}} textStyle={{color: 'white'}}/>
                    </View>
                </KoroCard>

                <KoroCard header={popoverHeader} footer={popoverFooter}>
                    <View>
                        <KoroPopover
                            visible={popOpen}
                            title='Popover'
                            content='This is a popover.'
                            >
                            <KoroButton title="Click me for a Popover" onPress={()=> setPopOpen(!popOpen)} buttonStyle={{backgroundColor: '#d9d9d9', minWidth: 200}} textStyle={{color: 'black'}}/>
                        </KoroPopover >
                    </View>
                </KoroCard>

                <KoroCard header={progressHeader} footer={progressFooter}>
                    <View>
                        <KoroProgress visible={progressActive}/>
                        <KoroButton title="Load Progress" onPress={() => showProgress()} buttonStyle={{backgroundColor: 'blue', minWidth: 200}} textStyle={{color: 'white'}} />
                    </View>
                </KoroCard>

                
                <KoroCard header={stepsHeader} footer={stepsFooter}>
                    <View>
                        <KoroModal visible={stepsOpen} borderStyle={{padding: 20}} onRequestClose={()=> setStepsOpen(false)}>
                            <KoroSteps
                                steps={['Step number 1', 'Step number 2', 'Step number 3', 'Step number 4', 'Step number 5']}
                                onDone={() => setStepsOpen(false)}
                            />
                        </KoroModal>
                        
                        <KoroButton title="Show steps" onPress={() => setStepsOpen(true)} buttonStyle={{backgroundColor: 'blue', minWidth: 200}} textStyle={{color: 'white'}} />
                    </View>
                </KoroCard>
                <KoroCard header={collapseHeader} footer={collapseFooter}>
                    <View>
                        <Text>This below is a Collapse</Text>
                    </View>
                </KoroCard>
            </ScrollView>
            {toast}
        </View>
    )
}

InfoComponentsScreen.navigationOptions = {
    headerTitle: 'Information Components'
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    }
})