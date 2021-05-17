import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100,
      date: new Date(),
      visibleTime: true
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(){
    if (this.state.visibleTime === true){
      if (this.state.time <= 0){
        this.setState({visibleTime: false})
      }
    }
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: new Date() 
    });
  }


  render(){
    return(
      <>
        {
          this.state.visibleTime && (
            <>
              <h1 style={{float: "left"}}>
                Sekarang jam - {this.state.date.toLocaleTimeString()}.
              </h1>
              <h1 style={{float: "right"}}>
                hitung Mundur: {this.state.time}
              </h1>
            </>
          )
        }
      </>
    )
  }
}

export default Timer