/*
 * SPDX-License-Identifier: GPL-3.0
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import { Margins } from "@vencord/types/utils";
import { Button, Forms, Select, Switch, Text, Toasts, useState  } from "@vencord/types/webpack/common";

import { SettingsComponent } from "./Settings";

export const SplashAnimation: SettingsComponent = ({ settings }) => {
    return (
        <>
            <Forms.FormTitle className={Margins.top16 + " " + Margins.bottom8}>Splash Animation</Forms.FormTitle>
            <Forms.FormText className={Margins.bottom8}>
                The animation on the splash window is loaded from{" "}
                {settings.splashAnimationPath ? (
                    <a
                        href="about:blank"
                        onClick={e => {
                            e.preventDefault();
                            VesktopNative.fileManager.showItemInFolder(settings.splashAnimationPath!);
                        }}
                    >
                        {settings.splashAnimationPath}
                    </a>
                ) : (
                    "the default location"
                )}
            </Forms.FormText>
            <div className="vcd-location-btns">
                <Button
                    size={Button.Sizes.SMALL}
                    onClick={async () => {
                        const choice = await VesktopNative.fileManager.selectImagePath();
                        if (choice === "cancelled") return;
                        settings.splashAnimationPath = choice;
                    }}
                >
                    Change
                </Button>
                <Button
                    size={Button.Sizes.SMALL}
                    color={Button.Colors.RED}
                    onClick={() => (settings.splashAnimationPath = void 0)}
                >
                    Reset
                </Button>
            </div>

            <Forms.FormDivider className={Margins.top16 + " " + Margins.bottom16} />
        </>
    );
};
