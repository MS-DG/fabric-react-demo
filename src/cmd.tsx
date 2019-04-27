import * as React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { RefObject } from 'react';

export interface IKeytipsCommandBarExampleState {
    showModal: boolean;
    showMessageBar: boolean;
}

export class Cmd extends React.Component<{}, IKeytipsCommandBarExampleState> {
    private readonly inputOpenFileRef: RefObject<HTMLInputElement>

    constructor(props: {}) {
        super(props);
        this.inputOpenFileRef = React.createRef()
        this.state = {
            showModal: false,
            showMessageBar: false
        };
    }

    private clickUpload() {
        if (this.inputOpenFileRef.current) {
            this.inputOpenFileRef.current.click()
        }
    }
    /* tslint:disable:jsx-ban-props jsx-no-lambda */
    public render() {
        return (
            <div>
                <CommandBar
                    items={[
                        {
                            key: 'commandBarItem2',
                            text: '刷新',
                            iconProps: {
                                iconName: 'Refresh'
                            },
                            onClick: this._showMessageBar,
                        },
                        {
                            key: 'commandBarItem1',
                            text: '上传',
                            iconProps: {
                                iconName: 'Upload'
                            },
                            onClick: this.clickUpload.bind(this),
                            // onRender: () => <input ref={this.inputOpenFileRef} style={{ display: "none" }} type="file" />

                        },
                        {
                            key: "upload-dummy",
                            // name: "Upload xml Document",
                            onRender: () => <input ref={this.inputOpenFileRef} style={{ display: "none" }} type="file" />
                        }

                    ]}
                    farItems={[
                        {
                            key: 'farItem1',
                            text: 'Options',
                            iconProps: {
                                iconName: 'SortLines'
                            },
                            subMenuProps: {
                                items: [
                                    {
                                        key: 'emailMessage',
                                        text: 'Send Email',
                                        iconProps: {
                                            iconName: 'Mail'
                                        },
                                        onClick: () => {
                                            console.log('test1');
                                        }
                                    },
                                    {
                                        key: 'calendarEvent',
                                        text: 'Make Calendar Event',
                                        iconProps: {
                                            iconName: 'Calendar'
                                        },
                                        onClick: () => {
                                            console.log('test2');
                                        },
                                        subMenuProps: {
                                            items: [
                                                {
                                                    key: 'testButton',
                                                    text: 'Add to Outlook',
                                                    onClick: () => {
                                                        console.log('test3');
                                                    }
                                                },
                                                {
                                                    key: 'testButton2',
                                                    text: 'Go to Bing',
                                                    href: 'http://www.bing.com',
                                                    target: '_blank'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        key: 'splitButtonTest',
                                        text: 'Other...',
                                        split: true,
                                        subMenuProps: {
                                            items: [
                                                {
                                                    key: 'splitButtonSubMenu1',
                                                    text: 'Submenu Item w/o Keytip'
                                                },
                                                {
                                                    key: 'splitButtonSubMenu2',
                                                    text: 'Submenu Item w/o Keytip'
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]}
                />
                {this.state.showMessageBar && <MessageBar messageBarType={MessageBarType.success}>已刷新</MessageBar>}
            </div>
        );
    }

    private _showModal = (): void => {
        this.setState({ showModal: true });
    };

    private _hideModal = (): void => {
        this.setState({ showModal: false });
    };

    private _showMessageBar = (): void => {
        this.setState({ showMessageBar: true });

        // Hide the MessageBar after 2 seconds
        setTimeout(this._hideMessageBar, 2000);
    };

    private _hideMessageBar = (): void => {
        this.setState({ showMessageBar: false });
    };
}