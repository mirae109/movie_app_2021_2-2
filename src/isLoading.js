import React from "react";

class isLoading extends React.Component {
    state = { 
        isLoading: true,
    };

    componentDidMount(){
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000);
    }

    render(){
        const { isLoading } = this.state;
        return <div> {isLoading ? 'Loading...' : 'we are ready'} </div>
    }
}