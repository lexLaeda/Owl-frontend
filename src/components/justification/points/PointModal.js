import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import React from "react";

export function PointModal({point}) {
    return (
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Имя точки"
                type="text"
                value={point.name}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="x"
                label="X"
                type="number"
                value={point.x}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="y"
                label="Y"
                type="number"
                value={point.y}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="h"
                label="H"
                type="number"
                value={point.h}
                fullWidth
            />
        </DialogContent>
    )
}
