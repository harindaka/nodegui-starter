import { QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, WindowState } from '@nodegui/nodegui';
import logo from '../assets/logox200.png';
import { styles } from './styles';

const win = new QMainWindow();
win.setWindowTitle("Hello World");
//win.setFixedSize(500, 500);
win.setWindowState(WindowState.WindowMaximized);

const centralWidget = new QWidget();
centralWidget.setObjectName("myroot");
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

const label = new QLabel();
label.setObjectName("mylabel");
label.setText("Hello");

const button = new QPushButton();
button.setIcon(new QIcon(logo));
button.setText("Open");

const label2 = new QLabel();
label2.setText("World");
label2.setInlineStyle(`
  color: red;
`);

rootLayout.addWidget(label);
rootLayout.addWidget(button);
rootLayout.addWidget(label2);
win.setCentralWidget(centralWidget);
win.setStyleSheet(styles);
win.show();

(global as any).win = win;
