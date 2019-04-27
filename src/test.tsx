import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DetailsListLayoutMode, Selection, SelectionMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { BreadcrumbBasicExample } from './bread';
import { ShimmeredDetailsList } from 'office-ui-fabric-react/lib/ShimmeredDetailsList';
import { IconButton, PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import Dialog, { DialogFooter, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { Stack, StackItem } from 'office-ui-fabric-react';

const classNames = mergeStyleSets({
    fileIconHeaderIcon: {
        padding: 0,
        fontSize: '16px'
    },
    fileIconCell: {
        textAlign: 'center',
        selectors: {
            '&:before': {
                content: '.',
                display: 'inline-block',
                verticalAlign: 'middle',
                height: '100%',
                width: '0px',
                visibility: 'hidden'
            }
        }
    },
    fileIconImg: {
        verticalAlign: 'middle',
        maxHeight: '16px',
        maxWidth: '16px'
    },
    selectionDetails: {
        marginBottom: '20px'
    },
    fileList: {
        width: "100%",
        selectors: {
            '@media(min-width: 1024px)': {
                width: "90%"
            },
            '@media(min-width: 1366px)': {
                width: "80%"
            },
            '@media(min-width: 1920px)': {
                width: 1200
            }
        }
    }
});
export interface IDetailsListDocumentsExampleState {
    columns: IColumn[];
    items: IDocument[];
    selectionDetails: string;
    isModalSelection: boolean;
    isCompactMode: boolean;
    loaded: boolean;
    hideDialog: boolean;
}

export interface IDocument {
    name: string;
    value: string;
    iconName: string;
    fileType: string;
    modifiedBy: string;
    dateModified: string;
    dateModifiedValue: number;
    fileSize: string;
    fileSizeRaw: number;
}

export class DetailsListDocumentsExample extends React.Component<{}, IDetailsListDocumentsExampleState> {
    private _selection: Selection;
    private _allItems: IDocument[];

    constructor(props: {}) {
        super(props);

        this._allItems = _generateDocuments();

        const columns: IColumn[] = [
            {
                key: 'column1',
                name: '文件类型',
                className: classNames.fileIconCell,
                iconClassName: classNames.fileIconHeaderIcon,
                ariaLabel: 'Column operations for File type, Press to sort on File type',
                iconName: 'Page',
                isIconOnly: true,
                fieldName: 'name',
                minWidth: 16,
                maxWidth: 16,
                onColumnClick: this._onColumnClick,
                onRender: (item: IDocument) => {
                    return <img src={item.iconName} className={classNames.fileIconImg} alt={item.fileType + ' file icon'} />;
                }
            },
            {
                key: 'column2',
                name: '文件名',
                fieldName: 'name',
                minWidth: 150,
                maxWidth: 500,
                isRowHeader: true,
                isResizable: true,
                isSorted: true,
                isSortedDescending: false,
                sortAscendingAriaLabel: 'Sorted A to Z',
                sortDescendingAriaLabel: 'Sorted Z to A',
                onColumnClick: this._onColumnClick,
                data: 'string',
                isPadded: true
            },
            {
                key: 'column3',
                name: '修改日期',
                fieldName: 'dateModifiedValue',
                minWidth: 70,
                maxWidth: 100,
                isResizable: true,
                onColumnClick: this._onColumnClick,
                data: 'number',
                onRender: (item: IDocument) => {
                    return <span>{item.dateModified}</span>;
                },
                isPadded: true
            },
            {
                key: 'column4',
                name: '作者',
                fieldName: 'modifiedBy',
                minWidth: 70,
                maxWidth: 100,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onColumnClick: this._onColumnClick,
                onRender: (item: IDocument) => {
                    return <span>{item.modifiedBy}</span>;
                },
                isPadded: true
            },
            {
                key: 'column5',
                name: '文件大小',
                fieldName: 'fileSizeRaw',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsible: true,
                data: 'number',
                onColumnClick: this._onColumnClick,
                onRender: (item: IDocument) => {
                    return <span>{item.fileSize}</span>;
                }
            },
            {
                key: 'column6',
                name: '操作',
                minWidth: 90,
                maxWidth: 120,
                isResizable: false,
                isCollapsible: false,
                data: 'number',
                onRender: (item: IDocument) => {
                    return <div>
                        <IconButton onClick={this._showDialog} iconProps={{ iconName: "CloudDownload" }} />
                        <IconButton
                            menuIconProps={{ iconName: 'MoreVertical' }}
                            role="button"
                            aria-haspopup={true}
                            aria-label="Show actions"
                            menuProps={{
                                items: [
                                    {
                                        key: 'delete',
                                        text: '删除',
                                        //   onClick: () => this._deleteItem(index)
                                    },
                                    {
                                        key: 'rename',
                                        text: '重命名',
                                        //   onClick: () => this._renameItem(item, index)
                                    },
                                    {
                                        key: 'voice',
                                        text: '文档录音',
                                        //   onClick: () => this._renameItem(item, index)
                                    },
                                    {
                                        key: 'doc',
                                        text: '手机上查看',
                                        //   onClick: () => this._renameItem(item, index)
                                    },
                                ]
                            }}
                        />
                    </div>;
                }
            }
        ];

        this._selection = new Selection({
            onSelectionChanged: () => {
                this.setState({
                    selectionDetails: this._getSelectionDetails()
                });
            }
        });

        this.state = {
            items: [],
            columns: columns,
            selectionDetails: this._getSelectionDetails(),
            isModalSelection: true,
            isCompactMode: false,
            loaded: false,
            hideDialog: true,
        };
    }

    componentDidMount() {
        setTimeout(() =>
            this.setState({
                'items': this._allItems,
                loaded: true,
            }), 1000);
    }
    public render() {
        const { columns, isCompactMode, items, selectionDetails, isModalSelection, loaded } = this.state;

        return (
            <Fabric>
                <Stack maxWidth="100%">
                    <StackItem align="auto">
                        {selectionDetails && <MessageBar messageBarType={MessageBarType.info}>{selectionDetails}</MessageBar>}
                    </StackItem>
                    <StackItem align="center" className={classNames.fileList}>
                        <BreadcrumbBasicExample></BreadcrumbBasicExample>
                        <MarqueeSelection selection={this._selection}>
                            <ShimmeredDetailsList
                                enableShimmer={!loaded}
                                items={items}
                                compact={isCompactMode}
                                columns={columns}
                                selectionMode={isModalSelection ? SelectionMode.multiple : SelectionMode.none}
                                setKey="set"
                                layoutMode={DetailsListLayoutMode.justified}
                                isHeaderVisible={true}
                                selection={this._selection}
                                selectionPreservedOnEmptyClick={true}
                                onItemInvoked={this._onItemInvoked}
                                enterModalSelectionOnTouch={true}
                                ariaLabelForSelectionColumn="Toggle selection"
                                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                            />
                        </MarqueeSelection>
                    </StackItem>
                </Stack>
                <Dialog
                    hidden={this.state.hideDialog}
                    onDismiss={this._closeDialog}
                    dialogContentProps={{
                        type: DialogType.normal,
                        title: '下载',
                        subText: '保存此文件到电脑?'
                    }}
                    modalProps={{
                        isBlocking: true
                    }}
                >
                    <DialogFooter>
                        <PrimaryButton onClick={this._closeDialog} text="保存" />
                        <DefaultButton onClick={this._closeDialog} text="取消" />
                    </DialogFooter>
                </Dialog>
            </Fabric>
        );
    }

    public componentDidUpdate(previousProps: any, previousState: IDetailsListDocumentsExampleState) {
        if (previousState.isModalSelection !== this.state.isModalSelection && !this.state.isModalSelection) {
            this._selection.setAllSelected(false);
        }
    }

    private _showDialog = (): void => {
        console.log(this);
        this.setState({ hideDialog: false });
    };

    private _closeDialog = (): void => {
        this.setState({ hideDialog: true });
    };

    private _onChangeText = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string): void => {
        this.setState({
            items: text ? this._allItems.filter(i => i.name.toLowerCase().indexOf(text) > -1) : this._allItems
        });
    };

    private _onItemInvoked(item: any): void {
        alert(`Item invoked: ${item.name}`);
    }

    private _getSelectionDetails(): string {
        const selectionCount = this._selection.getSelectedCount();

        switch (selectionCount) {
            case 0:
                return '';
            case 1:
                return '1 item selected: ' + (this._selection.getSelection()[0] as IDocument).name;
            default:
                return `${selectionCount} items selected`;
        }
    }

    private _onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
        const { columns, items } = this.state;
        const newColumns: IColumn[] = columns.slice();
        const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
        newColumns.forEach((newCol: IColumn) => {
            if (newCol === currColumn) {
                currColumn.isSortedDescending = !currColumn.isSortedDescending;
                currColumn.isSorted = true;
            } else {
                newCol.isSorted = false;
                newCol.isSortedDescending = true;
            }
        });
        const newItems = _copyAndSort(items, currColumn.fieldName!, currColumn.isSortedDescending);
        this.setState({
            columns: newColumns,
            items: newItems
        });
    };
}

function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
    const key = columnKey as keyof T;
    return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}

function _generateDocuments() {
    const items: IDocument[] = [];
    for (let i = 0; i < 500; i++) {
        const randomDate = _randomDate(new Date(2012, 0, 1), new Date());
        const randomFileSize = _randomFileSize();
        const randomFileType = _randomFileIcon();
        let fileName = _lorem(2);
        fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1).concat(`.${randomFileType.docType}`);
        let userName = _lorem(2);
        userName = userName
            .split(' ')
            .map((name: string) => name.charAt(0).toUpperCase() + name.slice(1))
            .join(' ');
        items.push({
            name: fileName,
            value: fileName,
            iconName: randomFileType.url,
            fileType: randomFileType.docType,
            modifiedBy: userName,
            dateModified: randomDate.dateFormatted,
            dateModifiedValue: randomDate.value,
            fileSize: randomFileSize.value,
            fileSizeRaw: randomFileSize.rawSize
        });
    }
    return items;
}

function _randomDate(start: Date, end: Date): { value: number; dateFormatted: string } {
    const date: Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return {
        value: date.valueOf(),
        dateFormatted: date.toLocaleDateString()
    };
}

const FILE_ICONS: { name: string }[] = [
    { name: 'accdb' },
    { name: 'csv' },
    { name: 'docx' },
    { name: 'dotx' },
    { name: 'mpt' },
    { name: 'odt' },
    { name: 'one' },
    { name: 'onepkg' },
    { name: 'onetoc' },
    { name: 'pptx' },
    { name: 'pub' },
    { name: 'vsdx' },
    { name: 'xls' },
    { name: 'xlsx' },
    { name: 'xsn' }
];

function _randomFileIcon(): { docType: string; url: string } {
    const docType: string = FILE_ICONS[Math.floor(Math.random() * FILE_ICONS.length)].name;
    return {
        docType,
        url: `https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/${docType}_16x1.svg`
    };
}

function _randomFileSize(): { value: string; rawSize: number } {
    const fileSize: number = Math.floor(Math.random() * 100) + 30;
    return {
        value: `${fileSize} KB`,
        rawSize: fileSize
    };
}

const LOREM_IPSUM = (
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
    'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt '
).split(' ');
let loremIndex = 0;
function _lorem(wordCount: number): string {
    const startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
    loremIndex = startIndex + wordCount;
    return LOREM_IPSUM.slice(startIndex, loremIndex).join(' ');
}