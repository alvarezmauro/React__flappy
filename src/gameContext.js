import React, { createContext } from 'react';

const defaultValues = {
  canvas: null,
  FPS: 40,
  jumpAmount: -10,
  maxFallSpeed: +10,
  acceleration: 1,
  worldSpeed: -2,
  gameMode: 'prestart',
  timeGameLastRunning: null,
  ground: null,
  pipes: null,
  bird: null
};

const initialiseGameData = data => {
  return Object.assign(defaultValues, data);
};

const GameDataContext = createContext({});

class GameDataContextProviderImplementation extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialiseGameData({
      ...defaultValues
      // articleId: this.props.articleId ? this.props.articleId : '',
      // footer: this.props.footer,
      // defaultContent: this.props.defaultContent,
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidUpdate(prevProps: Props, prevState: State) {}

  render() {
    console.log(this.state);
    return (
      <GameDataContext.Provider
        value={{
          gameData: {
            ...this.state
          }
        }}
        children={this.props.children}
      />
    );
  }
}

export const GameDataContextProvider = GameDataContextProviderImplementation;

export const GameDataContextConsumer = GameDataContext.Consumer;

export const withGameData = WrappedComponent => props => (
  <GameDataContext.Consumer>
    {({ gameData }) => {
      return <WrappedComponent {...props} gameData={gameData} />;
    }}
  </GameDataContext.Consumer>
);
