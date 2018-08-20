import React from 'react'
import ReactModal from 'react-modal'
import autoBind from 'react-autobind'

require("babel-core/register")
require("babel-polyfill")

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        margin: '0',
        padding: '0'
    }
}

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this)

        this.state = {
            modalIsOpen: false,
            modalTitle: "",
            modalMessage: "",
            isOK: false,
            isCANCEL: false
        }
    }

    _waitModal() {
        return new Promise((resolve, reject) => {
            this.promise = { resolve, reject }
        })
    }

    showModal(title, message, isOK = false, isCANCEL = true) {
        this.setState({ modalIsOpen: true, modalTitle: title, modalMessage: message, isOK: isOK, isCANCEL: isCANCEL })
        return this._waitModal()
    }

    async openModal(title, message, isOK = false, isCANCEL = true) {
        this.setState({ modalIsOpen: true, modalTitle: title, modalMessage: message, isOK: isOK, isCANCEL: isCANCEL })
        try {
            await this._waitModal()
            return null
        }
        catch (err) {
            return err
        }
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#fff'
        // this.subtitle.style.backgroundColor = 'blue'
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
        if (this.promise)
            this.promise.reject("Операция прервана")
    }

    acceptModal() {
        this.setState({ modalIsOpen: false });
        if (this.promise)
            this.promise.resolve()
    }

    render() {
        var styleOK = this.state.isOK ? { display: "block" } : { display: "none" }
        var styleCANCEL = this.state.isCANCEL ? { display: "block" } : { display: "none" }
        return (
            <div style={{margin: '0', padding: '0'}}>

                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel={this.state.modalTitle}
                    ariaHideApp={false}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={false}
                >
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title' ref={subtitle => this.subtitle = subtitle}>{this.state.modalTitle}</h5>
                            <p className='card-text'>{this.state.modalMessage}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" style={styleCANCEL} onClick={this.closeModal}>Отмена</button>
                            <button className="btn btn-success" style={styleOK} onClick={this.acceptModal}>Ок</button>
                        </div>
                    </div>
                </ReactModal>

            </div>
        )
    }
}