import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let totalHeads = headsCount
    let totalTails = tailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      totalHeads += 1
    } else {
      tossImage = TAILS_IMG_URL
      totalTails += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: totalHeads,
      tailsCount: totalTails,
    })
  }

  getTotalTosses = () => {
    const {headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return totalCount
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state

    const totalCount = this.getTotalTosses()

    return (
      <div className="bg-container">
        <div className="coinToss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="coin-image" />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="total-count">Total:{totalCount}</p>
            <p className="total-count">Heads:{headsCount}</p>
            <p className="total-count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
