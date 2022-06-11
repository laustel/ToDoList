import Resct from "react";
import { Scene, Stack, Tabs } from "react-native-router-flux";
import Accueil from "../Accueil";
import Statistiques from "../Statistiques";


const TabsPage = (
    <Stack hideNavBar>
        <Scene hideNavBar>
            <Tabs 
                key="tabbar"
                swipeEnabled
                type="replace"
                showLabel={true}
                >
                    <Stack 
                        key="accueil"
                        title="Accueil"
                    >
                        <Scene key="accueil" component={Accueil} title="Accueil" />
                    </Stack>
                    <Stack>
                        <Scene key="Statistiques" component={Statistiques} title="Statistique" />
                    </Stack>
                    <Stack>
                        <Scene key="Profile" component={Statistiques} title="Profile" />
                    </Stack>
                    
                </Tabs>
        </Scene>
    </Stack>
)

export default TabsPage;