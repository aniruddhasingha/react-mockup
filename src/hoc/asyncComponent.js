import React, { Component } from "react"

const asyncCompnent = (importCompnent) => {
    return class extends Component {
        state = {
            component: null
        }
        componentDidMount() {
            importCompnent().then(cmp => {
                this.setState({ component: cmp.default })
            });
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null
        }
    }
}
export default asyncCompnent


