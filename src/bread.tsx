import * as React from 'react';
import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react/lib/Breadcrumb';
export class BreadcrumbBasicExample extends React.Component<any, any> {
    // constructor(props: {}) {
    //     super(props);
    // }

    public render(): JSX.Element {
        return (
            <div>
                <Breadcrumb
                    items={[
                        { text: '文件夹1', key: 'TestKey1', href:"#", onClick: this._onBreadcrumbItemClicked },
                        { text: '文件夹2', key: 'TestKey2', href:"#", onClick: this._onBreadcrumbItemClicked },
                        { text: '文件夹3', key: 'TestKey3', href:"#", onClick: this._onBreadcrumbItemClicked },
                        { text: '文件夹4', key: 'TestKey4', href:"#", onClick: this._onBreadcrumbItemClicked },
                        { text: '文件夹5', key: 'TestKey5', href:"#", onClick: this._onBreadcrumbItemClicked, isCurrentItem: true }
                    ]}
                    maxDisplayedItems={3}
                    overflowIndex={1}
                    overflowAriaLabel={'More items'}
                    ariaLabel={'Breadcrumb with maxDisplayedItems set to two and overflowIndex set to 1'}
                />
            </div>
        );
    }

    private _onBreadcrumbItemClicked = (ev?: React.MouseEvent<HTMLElement>, item?: IBreadcrumbItem): void => {
        console.log(`Breadcrumb item with key "${item!.key}" has been clicked.`);
    };
}