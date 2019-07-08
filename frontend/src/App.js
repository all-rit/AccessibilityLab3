import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactGA from 'react-ga';
import "@reach/dialog/styles.css";
import './App.css';
import Title from './components/header/title';
import Home from './components/home/Home';
import Header from './components/header/headerMain';
import AboutInfo from './components/aboutInformation/aboutInfo';
import LandingPage from './components/LandingPage/landingPage';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import game from './components/game/game';
//Imports from redux actions
import {
    closeInfoState,
    closeSecondInfoState,
    endFirstGame,
    endGame,
    enterInfoState,
    enterSecondInfoState,
    goBackFromGame,
    login,
    resetBackground,
    selectGameOption,
    startGame,
    toWhiteBackground
} from './controllers/actions';

library.add(faQuestionCircle);

//State mapping for redux
const mapStateToProps = state => {
    return {
        user: state.changeUser.user,
        loggedIn: state.changeUser.loggedIn,
        gamesPlayed: state.changeGameState.gamesPlayed,
        gameState: state.changeGameState.gameState,
        aboutState: state.changeGameState.aboutState,
        admin: state.changeUser.admin,
        statState: state.changeGameState.statState,
        firstGame: state.changeGameState.firstGame,
        secondInfoState: state.changeGameState.secondInfoState,
        gameOption: state.selectGameOption.option,
        baseBackground: state.changeColors.baseBackground,
        changed: state.changeColors.changed,
        colorChange: state.changeGameState.colorChangeState,
        gameBackground: state.changeColors.gameBackground,
        endSystem: state.changeGameState.endSystem,
    }
};

//Mapping dispatches for redux
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (event) => dispatch(login(event)),
        onToWhiteBackground: (event) => dispatch(toWhiteBackground(event)),
        onStartGame: () => dispatch(startGame()),
        onEndGame: () => dispatch(endGame()),
        onSelectOption: (event) => dispatch(selectGameOption(event)),
        onEndFirstGame: () => dispatch(endFirstGame()),
        onEnterInfoState: () => dispatch(enterInfoState()),
        onCloseInfoState: () => dispatch(closeInfoState()),
        onEnterSecondInfoState: () => dispatch(enterSecondInfoState()),
        onCloseSecondInfoState: () => dispatch(closeSecondInfoState()),
        onGoBackFromGame: () => dispatch(goBackFromGame()),
        onResetBackground: (event) => dispatch(resetBackground(event))
    }
};

/*
Class declaration for main application
*/
class App extends Component {

    //Mounting control for backend check
    componentDidMount() {
        this.callBackendAPI()
            .then(res => {
                if (res.status === 'new user logged into system') {
                    this.props.onLogin([res.user, false, res.admin]);
                } else if (res.status === 'existing user logged into system') {
                    this.props.onLogin([res.user, false, res.admin]);
                } else {
                    console.log(res.status);
                }
            })
            .catch(err => console.log(err));
    };

    //function call for backend
    callBackendAPI = async () => {
        console.log('sending request to backend');
        const response = await fetch(process.env.API_URL + '/main', {method: 'get', credentials: 'include'});
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    //Used to establish React GA (google information)
    initializeReactGA() {
        ReactGA.initialize('UA-129523795-1');
        ReactGA.pageView(window.location.pathname);
    }

    //Renderer for class application
    render() {
        //Props from redux used in the application
        const {
            onChangeGameColors, gameState,gameEnabled, onStartGame,
            onEndGame, onSelectOption, baseBackground, baseRightCircle,
            baseWrongCircleOne, baseWrongCircleTwo, gameBackground,
            gameRightCircle, gameWrongCircleOne, gameWrongCircleTwo,
            gameOption, popupController, loggedIn, user,
            aboutState, onOpenAboutPage, onCloseAboutPage, admin, onOpenStatPage,
            onCloseStatPage, statState, onEndFirstGame, firstGame,
            thirdInfoState, onEnterSecondInfoState,
            gamesPlayed, leaderboardState,
            onOpenLeaderboard, onCloseLeaderboard, endSystem,
            onToWhiteBackground, onResetBackground, onOpenColorChange,
            onCloseColorChange, colorChange,
            onResetSystem, onGoBackFromGame
        } = this.props;

        //establishing array of current colors for the system
        const colors = [baseBackground, baseRightCircle, baseWrongCircleOne,
            baseWrongCircleTwo];


        //Return statement for rendering of the application
        return (
            <div>

                <div style={{background: `${gameBackground}`}} className='main'>
                    <Header
                        endSystem={endSystem}
                        gameState={gameState}
                        firstGame={firstGame}
                        popupController={popupController}
                        loggedIn={loggedIn}
                        user={user}
                        gameMode={gameOption}
                        colors={colors}
                        goBackFromGame={onGoBackFromGame}
                        changeGameColors={onChangeGameColors}
                        openAboutPage={onOpenAboutPage}
                        closeAboutPage={onCloseAboutPage}
                        aboutState={aboutState}
                        admin={admin}
                        openStatPage={onOpenStatPage}
                        closeStatPage={onCloseStatPage}
                        statState={statState}
                        gamesPlayed={gamesPlayed}
                        openLeaderboard={onOpenLeaderboard}
                        closeLeaderboard={onCloseLeaderboard}
                        leaderboardState={leaderboardState}
                        openColorChange={onOpenColorChange}
                        thirdInfoState={thirdInfoState}
                        colorChange={colorChange}
                        closeColorChange={onCloseColorChange}
                        openSecondInfoState={onEnterSecondInfoState}
                    />
                    {gameState ?
                        <div> {gameEnabled ?
                            <game/>
                            :
                            <div>

                            </div>
                        }
                        </div>
                        :
                        <div>
                            {aboutState ?
                                <AboutInfo
                                    toWhiteBackground={onToWhiteBackground}
                                    background={baseBackground}
                                />
                                :
                                <div>

                                    <div>

                                        <div>

                                            <div>

                                                <div>
                                                    {endSystem ?
                                                        <Conclusion
                                                            resetSystem={onResetSystem}/>
                                                        :
                                                        <div>
                                                            {firstGame ?
                                                                <LandingPage
                                                                    endFirstGame={onEndFirstGame}
                                                                    toWhiteBackground={onToWhiteBackground}
                                                                    background={baseBackground}
                                                                    loggedIn={loggedIn}
                                                                />
                                                                :
                                                                <div>
                                                                    :
                                                                    <div>
                                                                        <Title
                                                                            gameState={gameState}/>
                                                                        <Home
                                                                            background={gameBackground}
                                                                            onChangeGameColors={onChangeGameColors}
                                                                            gameOption={gameOption}
                                                                            correctColor={gameRightCircle}
                                                                            incorrectColorOne={gameWrongCircleOne}
                                                                            incorrectColorTwo={gameWrongCircleTwo}
                                                                            startGame={onStartGame}
                                                                            selectOption={onSelectOption}
                                                                            gamesPlayed={gamesPlayed}
                                                                            resetBackground={onResetBackground}
                                                                            baseBackground={baseBackground}
                                                                        />
                                                                    </div>

                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </div>


                                            </div>

                                        </div>

                                    </div>

                                </div>
                            }
                        </div>
                    }
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
