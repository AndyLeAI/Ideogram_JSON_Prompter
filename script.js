
        var json_prompt = JSON.parse(atob("eyIyNSI6eyJpbnB1dHMiOnsiaW1hZ2VzIjpbIjk4OjEzIiwwXX0sImNsYXNzX3R5cGUiOiJQcmV2aWV3SW1hZ2UiLCJfbWV0YSI6eyJ0aXRsZSI6IlByZXZpZXcgSW1hZ2UifX0sIjk4OjkiOnsiaW5wdXRzIjp7InZhZV9uYW1lIjoiZmx1eDItdmFlLnNhZmV0ZW5zb3JzIn0sImNsYXNzX3R5cGUiOiJWQUVMb2FkZXIiLCJfbWV0YSI6eyJ0aXRsZSI6IkxvYWQgVkFFIn19LCI5ODoxMCI6eyJpbnB1dHMiOnsiY29uZGl0aW9uaW5nIjpbIjk4OjI0IiwwXX0sImNsYXNzX3R5cGUiOiJDb25kaXRpb25pbmdaZXJvT3V0IiwiX21ldGEiOnsidGl0bGUiOiJDb25kaXRpb25pbmdaZXJvT3V0In19LCI5ODoxMSI6eyJpbnB1dHMiOnsid2lkdGgiOlsiOTg6MzEiLDFdLCJoZWlnaHQiOlsiOTg6MzIiLDFdLCJiYXRjaF9zaXplIjoxfSwiY2xhc3NfdHlwZSI6IkVtcHR5Rmx1eDJMYXRlbnRJbWFnZSIsIl9tZXRhIjp7InRpdGxlIjoiRW1wdHkgRmx1eCAyIExhdGVudCJ9fSwiOTg6MTIiOnsiaW5wdXRzIjp7Im5vaXNlIjpbIjk4OjE4IiwwXSwiZ3VpZGVyIjpbIjk4OjE1NSIsMF0sInNhbXBsZXIiOlsiOTg6MTYiLDBdLCJzaWdtYXMiOlsiOTg6MTciLDBdLCJsYXRlbnRfaW1hZ2UiOlsiOTg6MTEiLDBdfSwiY2xhc3NfdHlwZSI6IlNhbXBsZXJDdXN0b21BZHZhbmNlZCIsIl9tZXRhIjp7InRpdGxlIjoiU2FtcGxlckN1c3RvbUFkdmFuY2VkIn19LCI5ODoxMyI6eyJpbnB1dHMiOnsic2FtcGxlcyI6WyI5ODoxMiIsMF0sInZhZSI6WyI5ODo5IiwwXX0sImNsYXNzX3R5cGUiOiJWQUVEZWNvZGUiLCJfbWV0YSI6eyJ0aXRsZSI6IlZBRSBEZWNvZGUifX0sIjk4OjE2Ijp7ImlucHV0cyI6eyJzYW1wbGVyX25hbWUiOiJyZXNfbXVsdGlzdGVwIn0sImNsYXNzX3R5cGUiOiJLU2FtcGxlclNlbGVjdCIsIl9tZXRhIjp7InRpdGxlIjoiS1NhbXBsZXJTZWxlY3QifX0sIjk4OjE3Ijp7ImlucHV0cyI6eyJzdGVwcyI6WyI5ODoxNTEiLDFdLCJ3aWR0aCI6WyI5ODozMSIsMV0sImhlaWdodCI6WyI5ODozMiIsMV0sIm11IjpbIjk4OjE0NCIsMF0sInN0ZCI6WyI5ODoxNDYiLDBdfSwiY2xhc3NfdHlwZSI6IklkZW9ncmFtNFNjaGVkdWxlciIsIl9tZXRhIjp7InRpdGxlIjoiSWRlb2dyYW0gNCBTY2hlZHVsZXIifX0sIjk4OjE4Ijp7ImlucHV0cyI6eyJub2lzZV9zZWVkIjo0MjU2OTI1MzAzMDkyNTB9LCJjbGFzc190eXBlIjoiUmFuZG9tTm9pc2UiLCJfbWV0YSI6eyJ0aXRsZSI6IlJhbmRvbU5vaXNlIn19LCI5ODoyMyI6eyJpbnB1dHMiOnsidW5ldF9uYW1lIjoiaWRlb2dyYW00X2ZwOF9zY2FsZWQuc2FmZXRlbnNvcnMiLCJ3ZWlnaHRfZHR5cGUiOiJkZWZhdWx0In0sImNsYXNzX3R5cGUiOiJVTkVUTG9hZGVyIiwiX21ldGEiOnsidGl0bGUiOiJMb2FkIERpZmZ1c2lvbiBNb2RlbCJ9fSwiOTg6MjQiOnsiaW5wdXRzIjp7InRleHQiOiJBU0RGQVNERiIsImNsaXAiOlsiOTg6MTQiLDBdfSwiY2xhc3NfdHlwZSI6IkNMSVBUZXh0RW5jb2RlIiwiX21ldGEiOnsidGl0bGUiOiJDTElQIFRleHQgRW5jb2RlIChQb3NpdGl2ZSBQcm9tcHQpIn19LCI5ODoxNCI6eyJpbnB1dHMiOnsiY2xpcF9uYW1lIjoicXdlbjN2bF84Yl9mcDhfc2NhbGVkLnNhZmV0ZW5zb3JzIiwidHlwZSI6ImlkZW9ncmFtNCIsImRldmljZSI6ImRlZmF1bHQifSwiY2xhc3NfdHlwZSI6IkNMSVBMb2FkZXIiLCJfbWV0YSI6eyJ0aXRsZSI6IkxvYWQgQ0xJUCJ9fSwiOTg6MjciOnsiaW5wdXRzIjp7InZhbHVlIjoxMDI0fSwiY2xhc3NfdHlwZSI6IlByaW1pdGl2ZUludCIsIl9tZXRhIjp7InRpdGxlIjoiSW50IChXaWR0aCkifX0sIjk4OjI4Ijp7ImlucHV0cyI6eyJ2YWx1ZSI6MTAyNH0sImNsYXNzX3R5cGUiOiJQcmltaXRpdmVJbnQiLCJfbWV0YSI6eyJ0aXRsZSI6IkludCAoSGVpZ2h0KSJ9fSwiOTg6MzEiOnsiaW5wdXRzIjp7ImV4cHJlc3Npb24iOiJtYXgoKChhICsgMTUpIC8vIDE2KSAqIDE2LCAyNTYpIiwidmFsdWVzLmEiOlsiOTg6MjciLDBdfSwiY2xhc3NfdHlwZSI6IkNvbWZ5TWF0aEV4cHJlc3Npb24iLCJfbWV0YSI6eyJ0aXRsZSI6Ik1hdGggRXhwcmVzc2lvbiJ9fSwiOTg6MzIiOnsiaW5wdXRzIjp7ImV4cHJlc3Npb24iOiJtYXgoKChhICsgMTUpIC8vIDE2KSAqIDE2LCAyNTYpIiwidmFsdWVzLmEiOlsiOTg6MjgiLDBdfSwiY2xhc3NfdHlwZSI6IkNvbWZ5TWF0aEV4cHJlc3Npb24iLCJfbWV0YSI6eyJ0aXRsZSI6Ik1hdGggRXhwcmVzc2lvbiJ9fSwiOTg6MTQ0Ijp7ImlucHV0cyI6eyJ2YWx1ZSI6WyI5ODoxNDUiLDBdfSwiY2xhc3NfdHlwZSI6IkNvbWZ5TnVtYmVyQ29udmVydCIsIl9tZXRhIjp7InRpdGxlIjoiTnVtYmVyIENvbnZlcnQifX0sIjk4OjE0NSI6eyJpbnB1dHMiOnsianNvbl9zdHJpbmciOlsiOTg6MTQ4IiwwXSwia2V5IjoibXUifSwiY2xhc3NfdHlwZSI6Ikpzb25FeHRyYWN0U3RyaW5nIiwiX21ldGEiOnsidGl0bGUiOiJFeHRyYWN0IFRleHQgZnJvbSBKU09OIn19LCI5ODoxNDYiOnsiaW5wdXRzIjp7InZhbHVlIjpbIjk4OjE1MCIsMF19LCJjbGFzc190eXBlIjoiQ29tZnlOdW1iZXJDb252ZXJ0IiwiX21ldGEiOnsidGl0bGUiOiJOdW1iZXIgQ29udmVydCJ9fSwiOTg6MTQ3Ijp7ImlucHV0cyI6eyJqc29uX3N0cmluZyI6IntcbiAgXCJRdWFsaXR5XCI6IHtcbiAgICBcIm51bV9zdGVwc1wiOiA0OCxcbiAgICBcIm11XCI6IDAuMCxcbiAgICBcInN0ZFwiOiAxLjUsXG4gICAgXCJwcmVzZXRfaWRcIjogXCJWNF9RVUFMSVRZXzQ4XCJcbiAgfSxcbiAgXCJEZWZhdWx0XCI6IHtcbiAgICBcIm51bV9zdGVwc1wiOiAyMCxcbiAgICBcIm11XCI6IDAuMCxcbiAgICBcInN0ZFwiOiAxLjc1LFxuICAgIFwicHJlc2V0X2lkXCI6IFwiVjRfREVGQVVMVF8yMFwiXG4gIH0sXG4gIFwiVHVyYm9cIjoge1xuICAgIFwibnVtX3N0ZXBzXCI6IDEyLFxuICAgIFwibXVcIjogMC41LFxuICAgIFwic3RkXCI6IDEuNzUsXG4gICAgXCJwcmVzZXRfaWRcIjogXCJWNF9UVVJCT18xMlwiXG4gIH1cbn0iLCJrZXkiOlsiOTg6MTU2IiwwXX0sImNsYXNzX3R5cGUiOiJKc29uRXh0cmFjdFN0cmluZyIsIl9tZXRhIjp7InRpdGxlIjoiRXh0cmFjdCBUZXh0IGZyb20gSlNPTiJ9fSwiOTg6MTQ4Ijp7ImlucHV0cyI6eyJzdHJpbmciOlsiOTg6MTQ3IiwwXSwiZmluZCI6IiciLCJyZXBsYWNlIjoiXCIifSwiY2xhc3NfdHlwZSI6IlN0cmluZ1JlcGxhY2UiLCJfbWV0YSI6eyJ0aXRsZSI6IlJlcGxhY2UgVGV4dCJ9fSwiOTg6MTQ5Ijp7ImlucHV0cyI6eyJqc29uX3N0cmluZyI6WyI5ODoxNDgiLDBdLCJrZXkiOiJudW1fc3RlcHMifSwiY2xhc3NfdHlwZSI6Ikpzb25FeHRyYWN0U3RyaW5nIiwiX21ldGEiOnsidGl0bGUiOiJFeHRyYWN0IFRleHQgZnJvbSBKU09OIn19LCI5ODoxNTAiOnsiaW5wdXRzIjp7Impzb25fc3RyaW5nIjpbIjk4OjE0OCIsMF0sImtleSI6InN0ZCJ9LCJjbGFzc190eXBlIjoiSnNvbkV4dHJhY3RTdHJpbmciLCJfbWV0YSI6eyJ0aXRsZSI6IkV4dHJhY3QgVGV4dCBmcm9tIEpTT04ifX0sIjk4OjE1MSI6eyJpbnB1dHMiOnsidmFsdWUiOlsiOTg6MTQ5IiwwXX0sImNsYXNzX3R5cGUiOiJDb21meU51bWJlckNvbnZlcnQiLCJfbWV0YSI6eyJ0aXRsZSI6Ik51bWJlciBDb252ZXJ0In19LCI5ODoxNTQiOnsiaW5wdXRzIjp7InVuZXRfbmFtZSI6ImlkZW9ncmFtNF91bmNvbmRpdGlvbmFsX2ZwOF9zY2FsZWQuc2FmZXRlbnNvcnMiLCJ3ZWlnaHRfZHR5cGUiOiJkZWZhdWx0In0sImNsYXNzX3R5cGUiOiJVTkVUTG9hZGVyIiwiX21ldGEiOnsidGl0bGUiOiJMb2FkIERpZmZ1c2lvbiBNb2RlbCJ9fSwiOTg6MTU1Ijp7ImlucHV0cyI6eyJjZmciOjcsIm1vZGVsIjpbIjk4OjE1NyIsMF0sInBvc2l0aXZlIjpbIjk4OjI0IiwwXSwibW9kZWxfbmVnYXRpdmUiOlsiOTg6MTU0IiwwXSwibmVnYXRpdmUiOlsiOTg6MTAiLDBdfSwiY2xhc3NfdHlwZSI6IkR1YWxNb2RlbEd1aWRlciIsIl9tZXRhIjp7InRpdGxlIjoiRHVhbCBNb2RlbCBDRkcgR3VpZGVyIn19LCI5ODoxNTYiOnsiaW5wdXRzIjp7ImNob2ljZSI6IkRlZmF1bHQiLCJpbmRleCI6MSwib3B0aW9uMSI6IlF1YWxpdHkiLCJvcHRpb24yIjoiRGVmYXVsdCIsIm9wdGlvbjMiOiJUdXJibyIsIm9wdGlvbjQiOiIifSwiY2xhc3NfdHlwZSI6IkN1c3RvbUNvbWJvIiwiX21ldGEiOnsidGl0bGUiOiJDdXN0b20gQ29tYm8ifX0sIjk4OjE1NyI6eyJpbnB1dHMiOnsiY2ZnIjozLCJzdGFydF9wZXJjZW50IjowLjksImVuZF9wZXJjZW50IjoxLCJtb2RlbCI6WyI5ODoyMyIsMF19LCJjbGFzc190eXBlIjoiQ0ZHT3ZlcnJpZGUiLCJfbWV0YSI6eyJ0aXRsZSI6IkNGRyBPdmVycmlkZSJ9fX0="))
        // State
        let canvasW = 1024;
        let canvasH = 1024;
        let scale = 1;
        let boxes = [];
        let globalPalette = [];
        let selectedBoxId = null;
        let boxCounter = 0;

        // DOM Elements
        const canvas = document.getElementById('canvas-wrapper');
        const canvasWSlider = document.getElementById('canvas-width');
        const canvasHSlider = document.getElementById('canvas-height');
        const aspectSelect = document.getElementById('aspect-ratio');
        const seedSlider = document.getElementById('r-seed');
        const boxPanel = document.getElementById('box-panel');
        const jsonOutput = document.getElementById('json-output')

        // UI Listeners for sliders
        function syncSizeLabels() {
            document.getElementById('w-val').innerText = canvasWSlider.value.toString().padStart(4, '0');
            document.getElementById('h-val').innerText = canvasHSlider.value.toString().padStart(4, '0');
            if (aspectSelect.value === 'custom') {
                aspectSelect.options[aspectSelect.selectedIndex].text = `Custom — ${canvasWSlider.value}×${canvasHSlider.value}`;
            }
        }

        canvasWSlider.addEventListener('input', () => { aspectSelect.value = 'custom'; syncSizeLabels(); });
        canvasHSlider.addEventListener('input', () => { aspectSelect.value = 'custom'; syncSizeLabels(); });
        seedSlider.addEventListener('input', e => document.getElementById('r-seed-value').innerText = e.target.value.toString().padStart(5, '0'));

        document.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        document.addEventListener('drop', (e) => {
            e.preventDefault();

            if (e.dataTransfer.files.length > 0) {
                importImage(e.dataTransfer.files[0]); // is async
            }
        });

        let defaultExampleImage = 'example.png';
        let defaultExampleSize = { width: 1024, height: 1024 };

        function setCanvasSize(width, height) {
            canvasWSlider.value = Math.round(width);
            canvasHSlider.value = Math.round(height);
            syncSizeLabels();
        }

        function applyAspectPreset() {
            const value = aspectSelect.value;
            if (value === 'original') {
                setCanvasSize(defaultExampleSize.width, defaultExampleSize.height);
            } else if (value !== 'custom') {
                const [w, h] = value.split('x').map(Number);
                setCanvasSize(w, h);
            }
            initCanvas();
        }

        function initCanvas() {
            canvasW = parseInt(canvasWSlider.value);
            canvasH = parseInt(canvasHSlider.value);
            canvas.style.width = canvasW + 'px';
            canvas.style.height = canvasH + 'px';

            fitCanvasToShell();

            canvas.dataset.size = `${canvasW} × ${canvasH}`;
            setDefaultCanvasBackground();

            canvas.innerHTML = '';
            jsonOutput.value = '';
            boxes = [];
            selectBox(null);
        }

        // Color Palette Logic
        function addColor(type) {
            const picker = document.getElementById(type + '-color-picker');
            let hex = picker.value.toUpperCase(); // Ideogram4 requires uppercase string

            if (type === 'global') {
                if (globalPalette.length >= 16) return alert("Max 16 colors allowed.");
                if (!globalPalette.includes(hex)) {
                    globalPalette.push(hex);
                    renderColors('global');
                    saveStateDebounced(); generateJSON();
                }
            } else if (type === 'box' && selectedBoxId !== null) {
                const box = boxes.find(b => b.id === selectedBoxId);
                if (box.colors.length >= 5) return alert("Max 5 colors allowed per box.");
                if (!box.colors.includes(hex)) {
                    box.colors.push(hex);
                    renderColors('box');
                    saveStateDebounced(); generateJSON();
                }
            }
        }

        function removeColor(type, hex) {
            if (type === 'global') {
                globalPalette = globalPalette.filter(c => c !== hex);
                renderColors('global');
                saveStateDebounced(); generateJSON();
            } else if (type === 'box' && selectedBoxId !== null) {
                const box = boxes.find(b => b.id === selectedBoxId);
                box.colors = box.colors.filter(c => c !== hex);
                renderColors('box');
                saveStateDebounced(); generateJSON();
            }
        }

        function renderColors(type) {
            const container = document.getElementById(type + '-colors');
            container.innerHTML = '';
            const list = type === 'global' ? globalPalette : (boxes.find(b => b.id === selectedBoxId)?.colors || []);

            list.forEach(hex => {
                const swatch = document.createElement('div');
                swatch.className = 'swatch';
                swatch.style.backgroundColor = hex;
                swatch.innerHTML = '×';
                swatch.onclick = () => removeColor(type, hex);
                container.appendChild(swatch);
            });
        }

        // Canvas Drawing Logic
        let isDrawing = false;
        let isDragging = false;
        let isResizing = false;
        let currentBoxDOM = null;
        let startX, startY;

        canvas.addEventListener('pointerdown', (e) => {
            if (e.target === canvas) {
                isDrawing = true;
                const rect = canvas.getBoundingClientRect();
                startX = (e.clientX - rect.left) / scale;
                startY = (e.clientY - rect.top) / scale;

                const box = {
                    id: 'box_' + boxCounter++,
                    x: startX, y: startY, w: 0, h: 0,
                    mode: 'obj', text: '', desc: '', colors: []
                };
                boxes.push(box);

                currentBoxDOM = document.createElement('div');
                currentBoxDOM.className = 'bounding-box selected';
                currentBoxDOM.id = box.id;
                currentBoxDOM.style.left = startX + 'px';
                currentBoxDOM.style.top = startY + 'px';

                appendBoxControls(currentBoxDOM, box);

                canvas.appendChild(currentBoxDOM);
                selectBox(box.id);
            } else if (e.target.classList.contains('resize-handle')) {
                isResizing = true;
                currentBoxDOM = e.target.parentElement;
                selectBox(currentBoxDOM.id);
                const rect = canvas.getBoundingClientRect();
                dragStartX = (e.clientX - rect.left) / scale;
                dragStartY = (e.clientY - rect.top) / scale;
                initialBoxX = parseFloat(currentBoxDOM.style.left) || 0;
                initialBoxY = parseFloat(currentBoxDOM.style.top) || 0;
                initialBoxW = parseFloat(currentBoxDOM.style.width) || 0;
                initialBoxH = parseFloat(currentBoxDOM.style.height) || 0;
                resizeDir = e.target.dataset.dir || 'se';
                e.stopPropagation();
            } else if (e.target.closest('.bounding-box')) {
                isDragging = true;
                currentBoxDOM = e.target.closest('.bounding-box');
                selectBox(currentBoxDOM.id);
                const rect = canvas.getBoundingClientRect();
                dragStartX = (e.clientX - rect.left) / scale;
                dragStartY = (e.clientY - rect.top) / scale;
                initialBoxX = parseFloat(currentBoxDOM.style.left);
                initialBoxY = parseFloat(currentBoxDOM.style.top);
                e.stopPropagation();
            }
        });

        canvas.addEventListener('pointermove', (e) => {
            const rect = canvas.getBoundingClientRect();
            const currentX = (e.clientX - rect.left) / scale;
            const currentY = (e.clientY - rect.top) / scale;

            if (isDrawing && currentBoxDOM) {
                const w = currentX - startX;
                const h = currentY - startY;
                currentBoxDOM.style.width = Math.abs(w) + 'px';
                currentBoxDOM.style.height = Math.abs(h) + 'px';
                currentBoxDOM.style.left = (w < 0 ? currentX : startX) + 'px';
                currentBoxDOM.style.top = (h < 0 ? currentY : startY) + 'px';
            }
        });

        window.addEventListener('pointerup', () => {
            if (isDrawing && currentBoxDOM) {
                // Save final dimensions
                const box = boxes.find(b => b.id === currentBoxDOM.id);
                box.w = parseFloat(currentBoxDOM.style.width) || 0;
                box.h = parseFloat(currentBoxDOM.style.height) || 0;
                box.x = parseFloat(currentBoxDOM.style.left) || 0;
                box.y = parseFloat(currentBoxDOM.style.top) || 0;

                if (box.w < 10 || box.h < 10) {
                    // Ignore tiny accidental clicks
                    canvas.removeChild(currentBoxDOM);
                    boxes = boxes.filter(b => b.id !== box.id);
                    selectBox(null);
                }
            }
            if (isDragging || isResizing) syncDomToBoxes();
            if (isDrawing || isDragging || isResizing) { renderLayers(); saveState(); generateJSON(); }
            clearSnapLines();
            isDrawing = false;
            isDragging = false;
            isResizing = false;
            currentBoxDOM = null;
        });

        // Box Interaction (Select, Drag, Resize)
        let dragStartX, dragStartY, initialBoxX, initialBoxY, initialBoxW, initialBoxH, resizeDir = 'se';

        window.addEventListener('pointermove', (e) => {
            const rect = canvas.getBoundingClientRect();
            const currentX = (e.clientX - rect.left) / scale;
            const currentY = (e.clientY - rect.top) / scale;

            if (isDragging && currentBoxDOM) {
                const dx = currentX - dragStartX;
                const dy = currentY - dragStartY;
                const snapped = snapRect(initialBoxX + dx, initialBoxY + dy, parseFloat(currentBoxDOM.style.width), parseFloat(currentBoxDOM.style.height));
                currentBoxDOM.style.left = snapped.x + 'px';
                currentBoxDOM.style.top = snapped.y + 'px';
            } else if (isResizing && currentBoxDOM) {
                const dx = currentX - dragStartX;
                const dy = currentY - dragStartY;

                // Resize with the opposite edge locked.
                // Example: dragging the right handle only changes the right edge,
                // dragging the top handle only changes the top edge, etc.
                // This prevents the box from expanding in the opposite direction.
                const minSize = 10;
                let left = initialBoxX;
                let top = initialBoxY;
                let right = initialBoxX + initialBoxW;
                let bottom = initialBoxY + initialBoxH;

                if (resizeDir.includes('e')) right = initialBoxX + initialBoxW + dx;
                if (resizeDir.includes('w')) left = initialBoxX + dx;
                if (resizeDir.includes('s')) bottom = initialBoxY + initialBoxH + dy;
                if (resizeDir.includes('n')) top = initialBoxY + dy;

                // Clamp to canvas bounds while keeping the opposite side fixed.
                left = Math.max(0, Math.min(left, canvasW));
                right = Math.max(0, Math.min(right, canvasW));
                top = Math.max(0, Math.min(top, canvasH));
                bottom = Math.max(0, Math.min(bottom, canvasH));

                if (resizeDir.includes('w') && right - left < minSize) left = right - minSize;
                if (resizeDir.includes('e') && right - left < minSize) right = left + minSize;
                if (resizeDir.includes('n') && bottom - top < minSize) top = bottom - minSize;
                if (resizeDir.includes('s') && bottom - top < minSize) bottom = top + minSize;

                // Final safety clamp.
                left = Math.max(0, left);
                top = Math.max(0, top);
                right = Math.min(canvasW, right);
                bottom = Math.min(canvasH, bottom);

                currentBoxDOM.style.left = left + 'px';
                currentBoxDOM.style.top = top + 'px';
                currentBoxDOM.style.width = Math.max(minSize, right - left) + 'px';
                currentBoxDOM.style.height = Math.max(minSize, bottom - top) + 'px';
            }
        });

        // Box Forms logic
        function selectBox(id) {
            selectedBoxId = id;
            document.querySelectorAll('.bounding-box').forEach(el => el.classList.remove('selected'));
            if (id) {
                document.getElementById(id).classList.add('selected');
                boxPanel.style.display = 'block';

                const box = boxes.find(b => b.id === id);
                document.getElementById('box-mode').value = box.mode;
                document.getElementById('box-text').value = box.text;
                document.getElementById('box-desc').value = box.desc;
                document.getElementById('text-input-group').style.display = box.mode === 'text' ? 'block' : 'none';
                renderColors('box');
            } else {
                boxPanel.style.display = 'none';
            }
            renderLayers();
        }

        function updateBoxData() {
            if (!selectedBoxId) return;
            const box = boxes.find(b => b.id === selectedBoxId);
            box.mode = document.getElementById('box-mode').value;
            box.text = document.getElementById('box-text').value;
            box.desc = document.getElementById('box-desc').value;
            document.getElementById('text-input-group').style.display = box.mode === 'text' ? 'block' : 'none';
            updateBoxLabel(box);
            renderLayers();
            saveStateDebounced();
            generateJSON();
        }

        function getBoxTitle(box) {
            const text = (box.mode === 'text' ? box.text : box.desc) || 'Describe this box...';
            return text.trim() || 'Describe this box...';
        }

        function appendBoxLabel(dom, box) {
            const label = document.createElement('div');
            label.className = 'box-label';
            dom.appendChild(label);
            updateBoxLabel(box);
        }

        function updateBoxLabel(box) {
            const dom = document.getElementById(box.id);
            if (!dom) return;
            let label = dom.querySelector('.box-label');
            if (!label) {
                label = document.createElement('div');
                label.className = 'box-label';
                dom.insertBefore(label, dom.firstChild);
            }
            label.textContent = getBoxTitle(box);
            label.title = getBoxTitle(box);
        }

        function setDefaultCanvasBackground() {
            const applyBg = (fileName, img) => {
                defaultExampleImage = fileName;
                if (img && img.naturalWidth && img.naturalHeight) {
                    defaultExampleSize = { width: img.naturalWidth, height: img.naturalHeight };
                }
                canvas.style.backgroundImage = `linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px), url('${fileName}')`;
                canvas.style.backgroundSize = '64px 64px, 64px 64px, cover';
                canvas.style.backgroundPosition = 'center, center, center';
                canvas.style.backgroundRepeat = 'repeat, repeat, no-repeat';
            };

            const png = new Image();
            png.onload = () => applyBg('example.png', png);
            png.onerror = () => {
                const jpg = new Image();
                jpg.onload = () => applyBg('example.jpg', jpg);
                jpg.onerror = () => {
                    canvas.style.backgroundImage = `linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)`;
                    canvas.style.backgroundSize = '64px 64px, 64px 64px';
                };
                jpg.src = 'example.jpg';
            };
            png.src = 'example.png';
        }

        function fitCanvasToShell() {
            const shell = canvas.parentElement;
            const shellWidth = Math.max(320, shell.clientWidth - 40);
            const shellHeight = Math.max(320, shell.clientHeight - 40);

            // Auto fit when the canvas is larger than the visible workspace.
            // When it is smaller, keep it at 100% and center it with flex.
            scale = Math.min(shellWidth / canvasW, shellHeight / canvasH, 1);

            canvas.style.width = canvasW + 'px';
            canvas.style.height = canvasH + 'px';
            canvas.style.transform = 'none';
            canvas.style.zoom = scale;
            shell.style.width = '100%';
            shell.style.justifyContent = (canvasW * scale <= shellWidth) ? 'center' : 'flex-start';

            requestAnimationFrame(() => {
                if (shell.scrollWidth > shell.clientWidth) {
                    shell.scrollLeft = (shell.scrollWidth - shell.clientWidth) / 2;
                }
            });
        }

        window.addEventListener('resize', () => {
            fitCanvasToShell();
        });

        function deleteSelectedBox() {
            if (!selectedBoxId) return;
            const dom = document.getElementById(selectedBoxId);
            if (dom) dom.remove();
            boxes = boxes.filter(b => b.id !== selectedBoxId);
            selectBox(null);
            renderLayers();
            saveState();
            generateJSON();
        }

        // JSON Generation
        function generateJSON() {
            // Save current bounding box positions to state
            boxes.forEach(box => {
                const dom = document.getElementById(box.id);
                if (dom) {
                    box.x = parseFloat(dom.style.left);
                    box.y = parseFloat(dom.style.top);
                    box.w = parseFloat(dom.style.width);
                    box.h = parseFloat(dom.style.height);
                }
            });

            // Normalize Coordinates 0-1000
            const norm = (val, max) => Math.min(1000, Math.max(0, Math.round((val / max) * 1000)));

            const elements = boxes.map(box => {
                const x1 = norm(box.x, canvasW);
                const y1 = norm(box.y, canvasH);
                const x2 = norm(box.x + box.w, canvasW);
                const y2 = norm(box.y + box.h, canvasH);

                let el = {
                    type: box.mode,
                    bbox: [y1, x1, y2, x2],
                };

                if (box.mode === 'text') el.text = box.text;
                el.desc = box.desc;
                if (box.colors && box.colors.length > 0) el.color_palette = box.colors;

                return el;
            });

            var output = {
                high_level_description: document.getElementById('high_level_description').value,
                style_description: {
                    aesthetics: document.getElementById('aesthetics').value,
                    lighting: document.getElementById('lighting').value,
                    //medium: document.getElementById('medium').value,
                    //art_style: document.getElementById('art_style').value,
                    //color_palette: globalPalette
                },
                compositional_deconstruction: {
                    background: document.getElementById('background').value,
                    elements: elements
                }
            };

            // in photo mode, order in prompt should be "photo" then "medium",
            // while in art_style mode order should be "medium" then "art_style"
            if(photoArtStyleMode == MODE_PHOTO){
                output.style_description.photo = document.getElementById('art_style').value;
                output.style_description.medium = document.getElementById('medium').value;
            }
            else{
                output.style_description.medium = document.getElementById('medium').value;
                output.style_description.art_style = document.getElementById('art_style').value
            }

            output.style_description.color_palette = globalPalette

            const strict = document.getElementById('strict-json')?.checked;
            if (strict) cleanEmpty(output);
            jsonOutput.value = JSON.stringify(output, null, document.getElementById('minify-json')?.checked ? 0 : 2);
        }

        async function waitForComfyUIResult(
            promptId,
            serverUrl,
            pollInterval = 1000,
            timeout = 300000,
            fetchImages = true,
        ) {
            const startTime = Date.now();

            while (true) {
                if (Date.now() - startTime > timeout) {
                    throw new Error(`Timed out waiting for prompt ${promptId}`);
                }

                // Check prompt history
                const response = await fetch(
                    `${serverUrl}/history/${encodeURIComponent(promptId)}`
                );

                if (!response.ok) {
                    throw new Error(`Failed to fetch history: ${response.status}`);
                }

                const history = await response.json();

                // Prompt appears in history once execution completes
                if (history[promptId]) {
                    const outputs = history[promptId].outputs || {};

                    const results = [];

                    for (const nodeId of Object.keys(outputs)) {
                        const nodeOutput = outputs[nodeId];

                        if (!nodeOutput.images) continue;

                        for (const image of nodeOutput.images) {
                            const imageUrl =
                                `${serverUrl}/view?` +
                                new URLSearchParams({
                                    filename: image.filename,
                                    subfolder: image.subfolder || "",
                                    type: image.type || "output",
                                });

                            const result = {
                                nodeId,
                                imageUrl,
                                filename: image.filename,
                                subfolder: image.subfolder,
                                type: image.type,
                            };

                            if (fetchImages) {
                                const imgResp = await fetch(imageUrl);
                                result.blob = await imgResp.blob();
                            }

                            results.push(result);
                        }
                    }

                    return results;
                }

                await new Promise(resolve => setTimeout(resolve, pollInterval));
            }
        }

        function setImage(imgURL){
            document.getElementById("image-view").src = imgURL
            canvas.style.backgroundImage = `linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px), url("${imgURL}")`;
            canvas.style.backgroundSize = '64px 64px, 64px 64px, cover';
            canvas.style.backgroundPosition = 'center, center, center';
            fitCanvasToShell();
        }

        async function generateImage() {
            const api = document.getElementById("api-location").value
            json_prompt["98:24"]["inputs"]["text"] = jsonOutput.value
            json_prompt["98:27"]["inputs"]["value"] = canvasWSlider.value
            json_prompt["98:28"]["inputs"]["value"] = canvasHSlider.value
            json_prompt["98:18"]["inputs"]["noise_seed"] = seedSlider.value

            var req = await fetch(api+"/api/prompt", {
                "headers": {
                    "accept": "*/*",
                    "content-type": "application/json"
                },
                "body": JSON.stringify({ "prompt": json_prompt }),
                "method": "POST"
            });
            req = await req.json()
            const image = await waitForComfyUIResult(req.prompt_id, api,
                3000,
                300000,
                true
            )
            setImage(image[0].imageUrl)
        }

        function extractComfyUIMetadata(arrayBuffer) {
            const view = new DataView(arrayBuffer);

            // Check valid PNG 8-byte signature
            if (view.byteLength < 8 || view.getUint32(0) !== 0x89504E47 || view.getUint32(4) !== 0x0D0A1A0A) {
                throw new Error("Not a valid PNG file.");
            }

            let offset = 8;
            const result = {};

            while (offset < view.byteLength) {
                if (offset + 8 > view.byteLength) break;

                // Read chunk length and type
                const length = view.getUint32(offset);
                const chunkType = String.fromCharCode(
                    view.getUint8(offset + 4),
                    view.getUint8(offset + 5),
                    view.getUint8(offset + 6),
                    view.getUint8(offset + 7)
                );

                offset += 8; // Move past length and type

                if (chunkType === 'tEXt') {
                    if (offset + length > view.byteLength) break;

                    const chunkData = new Uint8Array(arrayBuffer, offset, length);
                    const nullByteIndex = chunkData.indexOf(0); // Keyword and text are separated by a 0x00 byte

                    if (nullByteIndex !== -1) {
                        const keyword = new TextDecoder('ascii').decode(chunkData.subarray(0, nullByteIndex));

                        if (keyword === 'prompt' || keyword === 'workflow') {
                            const rawText = new TextDecoder('utf-8').decode(chunkData.subarray(nullByteIndex + 1));
                            try {
                                result[keyword] = JSON.parse(rawText);
                            } catch (e) {
                                result[keyword] = rawText; // Fallback if JSON parsing fails
                            }
                        }
                    }
                }

                offset += length + 4; // Skip the data segment and the 4-byte CRC trailing checksum
            }
            for (const key of Object.keys(result.prompt)){
                try{
                    const json = JSON.parse(result.prompt[key].inputs.text)
                    if(json.hasOwnProperty("high_level_description")){
                        return json
                    }
                }
                catch(e){}
            }
        }

        function parseBoxesFromJSON(json){
            try{
                const n = json.compositional_deconstruction.elements.length
                for (var i=0; i<n; i++){
                    const element = json.compositional_deconstruction.elements[i]
                    const bbox = element.bbox
                    bbox[0] = bbox[0]/1000*canvasH
                    bbox[2] = bbox[2]/1000*canvasH
                    bbox[1] = bbox[1]/1000*canvasW
                    bbox[3] = bbox[3]/1000*canvasW
                    var box = {
                        id: 'box_' + boxCounter++,
                        x: bbox[1], y: bbox[0], w: bbox[3]-bbox[1], h: bbox[2]-bbox[0],
                        mode: element.type, text: element.text ?? '', desc: element.desc, colors: element.color_palette
                    }
                    boxes.push(box);

                    currentBoxDOM = document.createElement('div');
                    currentBoxDOM.className = 'bounding-box';
                    currentBoxDOM.id = box.id;
                    currentBoxDOM.style.left = box.x + 'px';
                    currentBoxDOM.style.top = box.y + 'px';
                    currentBoxDOM.style.width = box.w + 'px';
                    currentBoxDOM.style.height = box.h + 'px';

                    appendBoxControls(currentBoxDOM, box);

                    canvas.appendChild(currentBoxDOM);

                    currentBoxDOM = null;
                }
            }
            catch(e){
                alert("invalid JSON")
            }
        }
        function parseParametersFromJSON(json){
            document.getElementById('high_level_description').value = json.high_level_description
            document.getElementById('aesthetics').value = json.style_description.aesthetics
            document.getElementById('lighting').value = json.style_description.lighting
            document.getElementById('medium').value = json.style_description.medium
            document.getElementById('background').value = json.compositional_deconstruction.background
            const globalColorPicker = document.getElementById('global-color-picker')
            globalPalette = [];
            renderColors('global');
            for(var i=0; i<json.style_description.color_palette.length; i++){
                globalColorPicker.value = json.style_description.color_palette[i];
                addColor('global');
            }

            if(json.style_description.hasOwnProperty("photo")){
                document.getElementById('art_style').value = json.style_description.photo
                document.getElementById('mode_photo').checked = true
                setPhotoArtstyle(MODE_PHOTO);
            }
            else{
                document.getElementById('art_style').value = json.style_description.art_style
                document.getElementById('mode_artstyle').checked = true
                setPhotoArtstyle(MODE_ARTSTYLE);
            }
        }

        async function importImage(image){
            console.log(image.size)
            if(image.type.startsWith("image")){
                // is image
                const img = new Image();
                img.onload = function() {
                    canvasWSlider.value = this.width.toString();
                    canvasWSlider.dispatchEvent(new Event('input'));
                    canvasHSlider.value = this.height.toString();
                    canvasHSlider.dispatchEvent(new Event('input'));
                    defaultExampleSize = { width: this.width, height: this.height };
                    aspectSelect.value = 'original';
                    initCanvas();
                    setImage(img.src);

                    if(image.type=="image/png"){
                        // is png. try and find workflow metadata
                        image.arrayBuffer()
                        .then(buff => {
                            const json = extractComfyUIMetadata(buff);
                            jsonOutput.value = JSON.stringify(json, null, 2);
                            parseBoxesFromJSON(json)
                            parseParametersFromJSON(json)
                        })
                    }
                };
                img.src = URL.createObjectURL(image);
            }
            else{
                alert("images only")
            }
        }

        var photoArtStyleMode = 1;
        const MODE_PHOTO = 0;
        const MODE_ARTSTYLE = 1;
        function setPhotoArtstyle(mode){
            console.log(mode)
            photoArtStyleMode = mode
            if(mode==MODE_PHOTO){
                // photo mode
                document.getElementById("medium").value = "photograph";
                document.getElementById("medium").disabled = true
                document.getElementById("mode_label").innerText = "Photo"
            }
            else if (mode==MODE_ARTSTYLE){
                // art_style mode
                document.getElementById("medium").disabled = false
                document.getElementById("mode_label").innerText = "Art Style"
            }
            else{
                console.error("invalid mode")
            }
        }



        // ---------- UX upgrades imported from Ideogram4-PromptEditor style ----------
        let snapEnabled = true;
        let historyStack = [];
        let historyIndex = -1;
        let saveTimer = null;

        function syncDomToBoxes() {
            boxes.forEach(box => {
                const dom = document.getElementById(box.id);
                if (!dom) return;
                box.x = parseFloat(dom.style.left) || 0;
                box.y = parseFloat(dom.style.top) || 0;
                box.w = parseFloat(dom.style.width) || 0;
                box.h = parseFloat(dom.style.height) || 0;
            });
        }

        function cleanEmpty(obj) {
            if (Array.isArray(obj)) { obj.forEach(cleanEmpty); return obj; }
            if (!obj || typeof obj !== 'object') return obj;
            Object.keys(obj).forEach(k => {
                const v = obj[k];
                if (v && typeof v === 'object') cleanEmpty(v);
                const emptyArray = Array.isArray(v) && v.length === 0;
                const emptyObj = v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length === 0;
                if (v === '' || v == null || emptyArray || emptyObj) delete obj[k];
            });
            return obj;
        }

        function appendBoxControls(dom, box) {
            appendBoxLabel(dom, box);
            ['n','s','e','w','nw','ne','sw','se'].forEach(dir => {
                const handle = document.createElement('div');
                handle.className = 'resize-handle resize-handle-' + dir;
                handle.dataset.dir = dir;
                dom.appendChild(handle);
            });
        }

        function snapRect(x, y, w, h) {
            if (!snapEnabled) return {x,y,w,h};
            const grid = 32;
            const threshold = 8;
            const snapVal = (v) => {
                const n = Math.round(v / grid) * grid;
                return Math.abs(v - n) <= threshold ? n : v;
            };
            const oldX = x, oldY = y;
            x = snapVal(x); y = snapVal(y);
            x = Math.max(0, Math.min(canvasW - w, x));
            y = Math.max(0, Math.min(canvasH - h, y));
            showSnapLines(x !== oldX ? x : null, y !== oldY ? y : null);
            return {x,y,w,h};
        }

        function showSnapLines(x, y) {
            clearSnapLines();
            if (x !== null) { const l = document.createElement('div'); l.className='snap-line v'; l.style.left=x+'px'; canvas.appendChild(l); }
            if (y !== null) { const l = document.createElement('div'); l.className='snap-line h'; l.style.top=y+'px'; canvas.appendChild(l); }
        }

        function clearSnapLines() { canvas.querySelectorAll('.snap-line').forEach(el => el.remove()); }

        function toggleSnap() {
            snapEnabled = !snapEnabled;
            document.getElementById('snap-toggle')?.classList.toggle('active', snapEnabled);
            clearSnapLines();
        }

        function saveState() {
            syncDomToBoxes();
            const snap = JSON.stringify({ boxes, globalPalette, selectedBoxId, canvasW, canvasH,
                hld: document.getElementById('high_level_description').value,
                aesthetics: document.getElementById('aesthetics').value,
                lighting: document.getElementById('lighting').value,
                medium: document.getElementById('medium').value,
                art: document.getElementById('art_style').value,
                background: document.getElementById('background').value,
                photoArtStyleMode });
            if (historyStack[historyIndex] === snap) return;
            historyStack = historyStack.slice(0, historyIndex + 1);
            historyStack.push(snap);
            historyIndex = historyStack.length - 1;
            updateHistoryButtons();
        }

        function saveStateDebounced() { clearTimeout(saveTimer); saveTimer = setTimeout(saveState, 300); }

        function restoreState(snap) {
            const data = JSON.parse(snap);
            boxes = data.boxes || []; globalPalette = data.globalPalette || []; selectedBoxId = data.selectedBoxId || null;
            canvasWSlider.value = data.canvasW || canvasWSlider.value; canvasHSlider.value = data.canvasH || canvasHSlider.value; syncSizeLabels();
            document.getElementById('high_level_description').value = data.hld || '';
            document.getElementById('aesthetics').value = data.aesthetics || '';
            document.getElementById('lighting').value = data.lighting || '';
            document.getElementById('medium').value = data.medium || '';
            document.getElementById('art_style').value = data.art || '';
            document.getElementById('background').value = data.background || '';
            photoArtStyleMode = data.photoArtStyleMode ?? photoArtStyleMode;
            canvasW = parseInt(canvasWSlider.value); canvasH = parseInt(canvasHSlider.value);
            canvas.style.width = canvasW + 'px'; canvas.style.height = canvasH + 'px'; canvas.dataset.size = `${canvasW} × ${canvasH}`;
            canvas.querySelectorAll('.bounding-box,.snap-line').forEach(el => el.remove());
            boxes.forEach(box => createBoxDom(box));
            fitCanvasToShell(); renderColors('global'); renderLayers(); selectBox(selectedBoxId); generateJSON(); updateHistoryButtons();
        }

        function undoState() { if (historyIndex > 0) { historyIndex--; restoreState(historyStack[historyIndex]); } }
        function redoState() { if (historyIndex < historyStack.length - 1) { historyIndex++; restoreState(historyStack[historyIndex]); } }
        function updateHistoryButtons() {
            const u=document.getElementById('undo-btn'), r=document.getElementById('redo-btn');
            if (u) u.disabled = historyIndex <= 0; if (r) r.disabled = historyIndex >= historyStack.length - 1;
        }

        function createBoxDom(box) {
            const dom = document.createElement('div');
            dom.className = 'bounding-box'; dom.id = box.id;
            dom.style.left = box.x + 'px'; dom.style.top = box.y + 'px';
            dom.style.width = box.w + 'px'; dom.style.height = box.h + 'px';
            appendBoxControls(dom, box); canvas.appendChild(dom); return dom;
        }

        function renderLayers() {
            const list = document.getElementById('layers-list');
            if (!list) return;
            syncDomToBoxes();
            list.innerHTML = '';
            boxes.forEach((box, i) => {
                const item = document.createElement('div');
                item.className = 'layer-item' + (box.id === selectedBoxId ? ' selected' : '');
                item.onclick = () => selectBox(box.id);
                item.innerHTML = `<div>${box.mode === 'text' ? 'T' : '□'}</div><div><div class="layer-title">${escapeHTML(getBoxTitle(box))}</div><div class="layer-meta">${box.mode} · [${Math.round(box.y)}, ${Math.round(box.x)}, ${Math.round(box.y+box.h)}, ${Math.round(box.x+box.w)}]</div></div><div class="layer-actions"><button title="Up">↑</button><button title="Down">↓</button></div>`;
                const btns = item.querySelectorAll('button');
                btns[0].onclick = (e) => { e.stopPropagation(); moveLayer(i, -1); };
                btns[1].onclick = (e) => { e.stopPropagation(); moveLayer(i, 1); };
                list.appendChild(item);
            });
        }

        function escapeHTML(str) { return String(str).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
        function moveLayer(index, delta) {
            const ni = index + delta; if (ni < 0 || ni >= boxes.length) return;
            [boxes[index], boxes[ni]] = [boxes[ni], boxes[index]];
            boxes.forEach((b, idx) => { const d=document.getElementById(b.id); if (d) d.style.zIndex = idx + 1; });
            renderLayers(); saveState(); generateJSON();
        }

        function addPresetBox(desc='New customized layout element description', x=300, y=300, w=300, h=300, mode='obj', text='') {
            const box = { id:'box_' + boxCounter++, x, y, w, h, mode, text, desc, colors: [] };
            boxes.push(box); createBoxDom(box); selectBox(box.id); renderLayers(); saveState(); generateJSON();
        }

        function alignSelected(dir) {
            const box = boxes.find(b => b.id === selectedBoxId); if (!box) return;
            syncDomToBoxes();
            if (dir === 'left') box.x = 0;
            if (dir === 'right') box.x = canvasW - box.w;
            if (dir === 'center-h') box.x = (canvasW - box.w) / 2;
            if (dir === 'top') box.y = 0;
            if (dir === 'bottom') box.y = canvasH - box.h;
            if (dir === 'center-v') box.y = (canvasH - box.h) / 2;
            const dom = document.getElementById(box.id);
            if (dom) { dom.style.left=box.x+'px'; dom.style.top=box.y+'px'; }
            renderLayers(); saveState(); generateJSON();
        }

        function copyJSON() {
            generateJSON();
            navigator.clipboard?.writeText(jsonOutput.value).then(() => alert('JSON copied!')).catch(() => { jsonOutput.select(); document.execCommand('copy'); });
        }

        const layoutPresets = {
            cinematic: { ratio:'1568x672', hld:'A dramatic cinematic landscape with sweeping mountain silhouettes, moody clouds, warm sunlight, and a lone figure overlooking a vast valley.', bg:'Deep atmospheric sky gradient with volumetric haze and distant mountain layers.', style:['Epic cinematic realism with filmic color grading.','Golden hour backlight with volumetric rays.','Cinematic photography','medium format film look'], boxes:[['Expansive sky and cloud formation spanning the upper frame.',0,0,1000,420],['Distant mountain range silhouette across the horizon.',0,380,1000,180],['A lone figure standing on a rocky ridge in the foreground.',440,420,110,220]]},
            product: { ratio:'864x1152', hld:'A clean minimalist product showcase featuring a single premium object centered in abundant negative space.', bg:'Seamless warm off-white studio background with a soft cast shadow.', style:['Pure minimalism with precise geometric harmony.','Soft diffused side light.','Product photography','commercial studio photo'], boxes:[['Centered premium product object on display.',300,330,300,420],['Soft cast shadow beneath the product.',270,730,460,60],['ESSENTIAL',210,120,580,90,'text','ESSENTIAL']]},
            portrait: { ratio:'864x1152', hld:'A professional studio portrait with classic Rembrandt lighting and refined modern styling.', bg:'Textured charcoal gray muslin backdrop with a subtle gradient.', style:['Classic studio portraiture with timeless elegance.','Rembrandt triangle lighting with subtle rim light.','Studio portrait photography','professional headshot'], boxes:[['Subject head and shoulders positioned in the center.',280,150,420,520],['Neutral earth-tone clothing on lower body.',300,650,400,260]]},
            editorial: { ratio:'720x1088', hld:'A bold fashion editorial composition with avant-garde silhouette and dramatic geometric shadows.', bg:'Bleached-white studio backdrop with diagonal architectural shadow lines.', style:['High-fashion editorial with sculptural composition.','Single hard side light creating deep shadows.','Editorial fashion photography','magazine cover style'], boxes:[['Avant-garde figure silhouette in a bold fashion pose.',220,140,320,700],['Bold editorial headline in heavy sans-serif.',90,850,540,120,'text','AVANT-GARDE']]},
            tech: { ratio:'1280x720', hld:'A futuristic cyberpunk cityscape at night with holographic billboards, neon reflections, and orbiting drones.', bg:'Dark steel-blue city atmosphere with faint circuit grid distortion.', style:['Cyberpunk futuristic neon tech aesthetic.','Neon signage lighting with deep blue shadows.','Digital concept art','crisp digital render'], boxes:[['Gleaming skyscraper skyline spanning the background.',60,80,1100,380],['Large holographic billboard emitting magenta and cyan light.',760,190,330,210],['NEON CITY',330,30,620,90,'text','NEON CITY']]},
            nature: { ratio:'1152x864', hld:'A serene forest stream through ancient moss-covered trees with dappled sunlight and wildflowers.', bg:'Softly blurred dense forest foliage receding into the distance.', style:['Lush botanical documentary realism.','Soft dappled forest light.','Nature photography','National Geographic style'], boxes:[['Lush green forest canopy framing the top.',0,0,1152,260],['Meandering stream winding into the foreground.',300,330,550,330],['Clusters of wildflowers along the stream bank.',60,650,260,170]]}
        };

        function loadLayoutPreset(name) {
            if (!name || !layoutPresets[name]) return;
            const p = layoutPresets[name];
            aspectSelect.value = p.ratio; applyAspectPreset();
            document.getElementById('high_level_description').value = p.hld;
            document.getElementById('background').value = p.bg;
            document.getElementById('aesthetics').value = p.style[0] || '';
            document.getElementById('lighting').value = p.style[1] || '';
            document.getElementById('medium').value = p.style[2] || '';
            document.getElementById('art_style').value = p.style[3] || '';
            boxes = []; canvas.querySelectorAll('.bounding-box').forEach(el => el.remove());
            p.boxes.forEach(b => addPresetBox(b[0], b[1], b[2], b[3], b[4], b[5] || 'obj', b[6] || ''));
            selectBox(null); renderLayers(); saveState(); generateJSON();
            document.getElementById('preset-selector').value = '';
        }


        syncSizeLabels();
        initCanvas();
        setPhotoArtstyle(1);
        renderLayers();
        generateJSON();
        saveState();
        requestAnimationFrame(fitCanvasToShell);
    