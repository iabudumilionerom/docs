"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6768],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=s,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2242:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u}});var r=t(3117),s=(t(7294),t(3905));const a={sidebar_label:"Full Node de consensus"},i="Configurer un Full Node de Consensus de Celestia",o={unversionedId:"nodes/consensus-full-node",id:"nodes/consensus-full-node",title:"Configurer un Full Node de Consensus de Celestia",description:"Les Full Nodes vous permettent de synchroniser l'historique de la blockchain dans la couche de consensus de Celestia.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/nodes/consensus-full-node.md",sourceDirName:"nodes",slug:"/nodes/consensus-full-node",permalink:"/fr/nodes/consensus-full-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/consensus-full-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Full Node de consensus"},sidebar:"nodes",previous:{title:"Node Validateur",permalink:"/fr/nodes/validator-node"},next:{title:"Resources",permalink:"/fr/category/resources"}},l={},u=[{value:"Hardware Requis",id:"hardware-requis",level:2},{value:"Configurer votre full node de consensus",id:"configurer-votre-full-node-de-consensus",level:2},{value:"Configurer les d\xe9pendances",id:"configurer-les-d\xe9pendances",level:3},{value:"D\xe9ployer Celestia-App",id:"d\xe9ployer-celestia-app",level:2},{value:"Installer celestia-app",id:"installer-celestia-app",level:3},{value:"Configurer les r\xe9seaux pair-\xe0-pair",id:"configurer-les-r\xe9seaux-pair-\xe0-pair",level:3},{value:"Configurer pruning",id:"configurer-pruning",level:3},{value:"R\xe9initialiser le r\xe9seau",id:"r\xe9initialiser-le-r\xe9seau",level:3},{value:"Optionnel : synchronisation rapide avec snapshot",id:"optionnel--synchronisation-rapide-avec-snapshot",level:3},{value:"Lancer celestia-app",id:"lancer-celestia-app",level:3},{value:"Optionnel: configuration du point de terminaison RPC",id:"optionnel-configuration-du-point-de-terminaison-rpc",level:3},{value:"D\xe9marrer Celestia-App avec SystemD",id:"d\xe9marrer-celestia-app-avec-systemd",level:3}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"configurer-un-full-node-de-consensus-de-celestia"},"Configurer un Full Node de Consensus de Celestia"),(0,s.kt)("p",null,"Les Full Nodes vous permettent de synchroniser l'historique de la blockchain dans la couche de consensus de Celestia."),(0,s.kt)("h2",{id:"hardware-requis"},"Hardware Requis"),(0,s.kt)("p",null,"La configuration mat\xe9rielle minimale requise pour ex\xe9cuter le full node de consensus est la suivante :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"M\xe9moire vive : 8Go de RAM"),(0,s.kt)("li",{parentName:"ul"},"Processeur\xa0: 4 c\u0153urs"),(0,s.kt)("li",{parentName:"ul"},"Disque dur : 250 Go de stockage SSD"),(0,s.kt)("li",{parentName:"ul"},"Bande passante : 1 Gbps pour le t\xe9l\xe9chargement/100 Mbps pour l'upload")),(0,s.kt)("h2",{id:"configurer-votre-full-node-de-consensus"},"Configurer votre full node de consensus"),(0,s.kt)("p",null,"Le tutoriel ci-apr\xe8s a \xe9t\xe9 r\xe9alis\xe9 sur un syst\xe8me d'exploitation Ubuntu Linux 20.04 (LTS) x64."),(0,s.kt)("h3",{id:"configurer-les-d\xe9pendances"},"Configurer les d\xe9pendances"),(0,s.kt)("p",null,"Suivez les instructions pour installer les d\xe9pendances ",(0,s.kt)("a",{parentName:"p",href:"/fr/nodes/environment"},"ici"),"."),(0,s.kt)("h2",{id:"d\xe9ployer-celestia-app"},"D\xe9ployer Celestia-App"),(0,s.kt)("p",null,"Cette section d\xe9crit la partie 1 de la configuration d'un full node de consensus Celestia : ex\xe9cuter un daemon Celestia App avec un Node interne Celestia Core."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note : v\xe9rifier que vous avez au moins 100+ Go d'espace libre pour installer et ex\xe9cuter en tout s\xe9curit\xe9 le full node de consensus.")),(0,s.kt)("h3",{id:"installer-celestia-app"},"Installer celestia-app"),(0,s.kt)("p",null,"Suivez le tutoriel pour installer l'application Celestia ",(0,s.kt)("a",{parentName:"p",href:"/fr/nodes/celestia-app"},"ici"),"."),(0,s.kt)("h3",{id:"configurer-les-r\xe9seaux-pair-\xe0-pair"},"Configurer les r\xe9seaux pair-\xe0-pair"),(0,s.kt)("p",null,"Maintenant, nous allons configurer les r\xe9seaux pair-\xe0-pair en clonant le d\xe9p\xf4t des r\xe9seaux :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf networks\ngit clone https://github.com/celestiaorg/networks.git\n")),(0,s.kt)("p",null,'Pour initialiser le r\xe9seau, choisissez un "node-name" qui d\xe9crit votre n\u0153ud. Le param\xe8tre --chain-id que nous utilisons ici est ',(0,s.kt)("inlineCode",{parentName:"p"},"mamaki"),". Gardez \xe0 l'esprit que cela pourrait changer si un nouveau testnet est d\xe9ploy\xe9."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'celestia-appd init "node-name" --chain-id mamaki\n')),(0,s.kt)("p",null,"Copiez le fichier ",(0,s.kt)("inlineCode",{parentName:"p"},"genesis.json"),". Pour mamaki nous utilisons :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cp $HOME/networks/mamaki/genesis.json $HOME/.celestia-app/config\n")),(0,s.kt)("p",null,"D\xe9finir les seeds et les pairs :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'BOOTSTRAP_PEERS=$(curl -sL https://raw.githubusercontent.com/celestiaorg/networks/master/mamaki/bootstrap-peers.txt | tr -d \'\\n\')\necho $BOOTSTRAP_PEERS\nsed -i.bak -e "s/^bootstrap-peers *=.*/bootstrap-peers = \\"$BOOTSTRAP_PEERS\\"/" $HOME/.celestia-app/config/config.toml\n')),(0,s.kt)("p",null,"Note : vous pouvez trouver plus de pairs ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/blob/master/mamaki/peers.txt"},"ici"),"."),(0,s.kt)("h3",{id:"configurer-pruning"},"Configurer pruning"),(0,s.kt)("p",null,"Pour des disques durs aux espaces de stockage plus r\xe9duits nous recommandons de configurer pruning en utilisant les param\xe8tres ci dessous. Vous pouvez utiliser vos propres param\xe8tres de pruning si vous voulez :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'PRUNING="custom"\nPRUNING_KEEP_RECENT="100"\nPRUNING_INTERVAL="10"\n\nsed -i -e "s/^pruning *=.*/pruning = \\"$PRUNING\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\\n\\"$PRUNING_KEEP_RECENT\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\\n\\"$PRUNING_INTERVAL\\"/" $HOME/.celestia-app/config/app.toml\n')),(0,s.kt)("h3",{id:"r\xe9initialiser-le-r\xe9seau"},"R\xe9initialiser le r\xe9seau"),(0,s.kt)("p",null,"Cela va supprimer tous les dossiers de donn\xe9es pour pouvoir recommencer \xe0 z\xe9ro :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tendermint unsafe-reset-all --home $HOME/.celestia-app\n")),(0,s.kt)("h3",{id:"optionnel--synchronisation-rapide-avec-snapshot"},"Optionnel : synchronisation rapide avec snapshot"),(0,s.kt)("p",null,"Synchroniser \xe0 partir du Genesis peut prendre beaucoup de temps, selon votre mat\xe9riel. En utilisant cette m\xe9thode vous synchronisez tr\xe8s rapidement votre node Celestia en t\xe9l\xe9chargeant un snapshot r\xe9cent de la blockchain. Si vous souhaitez synchroniser \xe0 partir du Genesis vous pouvez ignorer cette partie."),(0,s.kt)("p",null,"Ex\xe9cutez la commande suivante pour synchroniser rapidement \xe0 partir d'un snapshot pour ",(0,s.kt)("inlineCode",{parentName:"p"},"mamaki")," :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf ~/.celestia-app/data\nmkdir -p ~/.celestia-app/data\nSNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \\\n    egrep -o ">mamaki.*tar" | tr -d ">")\nwget -O - https://snaps.qubelabs.io/celestia/${SNAP_NAME} | tar xf - \\\n    -C ~/.celestia-app/data/\n')),(0,s.kt)("h3",{id:"lancer-celestia-app"},"Lancer celestia-app"),(0,s.kt)("p",null,"Afin de d\xe9marrer votre full node de consensus, ex\xe9cutez la commande ci-dessous :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\n")),(0,s.kt)("p",null,"Cela vous permettra de synchroniser l'historique de la blockchain Celestia."),(0,s.kt)("h3",{id:"optionnel-configuration-du-point-de-terminaison-rpc"},"Optionnel: configuration du point de terminaison RPC"),(0,s.kt)("p",null,"Vous pouvez configurer votre full node de consensus pour qu'il soit un terminal RPC public et capte toute connexion provenant des nodes de disponibilit\xe9 des donn\xe9es afin de servir les requ\xeates de l'API de disponibilit\xe9 des donn\xe9es ",(0,s.kt)("a",{parentName:"p",href:"/fr/developers/node-tutorial"},"ici"),"."),(0,s.kt)("p",null,"Notez que vous devez vous assurer que le port 9090 est ouvert pour cela."),(0,s.kt)("p",null,"Ex\xe9cutez les commandes suivantes :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'EXTERNAL_ADDRESS=$(wget -qO- eth0.me)\nsed -i.bak -e "s/^external-address = \\"\\"/external-address = \\"$EXTERNAL_ADDRESS:26656\\"/" $HOME/.celestia-app/config/config.toml\nsed -i \'s#"tcp://127.0.0.1:26657"#"tcp://0.0.0:26657"#g\' ~/.celestia-app/config/config/config.toml\n')),(0,s.kt)("p",null,"Red\xe9marrez ",(0,s.kt)("inlineCode",{parentName:"p"},"celestia-appd")," \xe0 l'\xe9tape pr\xe9c\xe9dente pour charger ces configurations."),(0,s.kt)("h3",{id:"d\xe9marrer-celestia-app-avec-systemd"},"D\xe9marrer Celestia-App avec SystemD"),(0,s.kt)("p",null,"Il est possible de suivre le tutoriel pour configurer Celestia-App en tant que processus de fond avec SystemD, ",(0,s.kt)("a",{parentName:"p",href:"/fr/nodes/systemd#start-the-celestia-app-with-systemd"},"ici"),"."))}c.isMDXComponent=!0}}]);