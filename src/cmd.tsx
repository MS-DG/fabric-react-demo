// import * as React from 'react';

// import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

// export class Cmd extends React.Component<{}, {}> {
//   public render(): JSX.Element {
//     return (
//       <div>
//         <CommandBar
//           items={this.getItems()}
//           overflowItems={this.getOverlflowItems()}
//           overflowButtonProps={{ ariaLabel: 'More commands' }}
//           farItems={this.getFarItems()}
//           ariaLabel={'Use left and right arrow keys to navigate between commands'}
//         />
//       </div>
//     );
//   }

//   // Data for CommandBar
//   private getItems = () => {
//     return [
//       {
//         key: 'newItem',
//         name: 'New',
//         cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
//         iconProps: {
//           iconName: 'Add'
//         },
//         ariaLabel: 'New',
//         subMenuProps: {
//           items: [
//             {
//               key: 'emailMessage',
//               name: 'Email message',
//               iconProps: {
//                 iconName: 'Mail'
//               },
//               ['data-automation-id']: 'newEmailButton'
//             },
//             {
//               key: 'calendarEvent',
//               name: 'Calendar event',
//               iconProps: {
//                 iconName: 'Calendar'
//               }
//             }
//           ]
//         }
//       },
//       {
//         key: 'upload',
//         name: 'Upload',
//         iconProps: {
//           iconName: 'Upload'
//         },
//         href: 'https://dev.office.com/fabric',
//         ['data-automation-id']: 'uploadButton'
//       },
//       {
//         key: 'share',
//         name: 'Share',
//         iconProps: {
//           iconName: 'Share'
//         },
//         onClick: () => console.log('Share')
//       },
//       {
//         key: 'download',
//         name: 'Download',
//         iconProps: {
//           iconName: 'Download'
//         },
//         onClick: () => console.log('Download')
//       }
//     ];
//   };

//   private getOverlflowItems = () => {
//     return [
//       {
//         key: 'move',
//         name: 'Move to...',
//         onClick: () => console.log('Move to'),
//         iconProps: {
//           iconName: 'MoveToFolder'
//         }
//       },
//       {
//         key: 'copy',
//         name: 'Copy to...',
//         onClick: () => console.log('Copy to'),
//         iconProps: {
//           iconName: 'Copy'
//         }
//       },
//       {
//         key: 'rename',
//         name: 'Rename...',
//         onClick: () => console.log('Rename'),
//         iconProps: {
//           iconName: 'Edit'
//         }
//       }
//     ];
//   };

//   private getFarItems = () => {
//     return [
//       {
//         key: 'sort',
//         name: 'Sort',
//         ariaLabel: 'Sort',
//         iconProps: {
//           iconName: 'SortLines'
//         },
//         onClick: () => console.log('Sort')
//       },
//       {
//         key: 'tile',
//         name: 'Grid view',
//         ariaLabel: 'Grid view',
//         iconProps: {
//           iconName: 'Tiles'
//         },
//         iconOnly: true,
//         onClick: () => console.log('Tiles')
//       },
//       {
//         key: 'info',
//         name: 'Info',
//         ariaLabel: 'Info',
//         iconProps: {
//           iconName: 'Info'
//         },
//         iconOnly: true,
//         onClick: () => console.log('Info')
//       }
//     ];
//   };
// }

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
            <div style={{ height: 100 }}>
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