export type Camera = {
  x: number;
  y: number;
};

export type Color = {
  r: number;
  b: number;
  g: number;
};

export enum LayerType {
  Rectangle,
  Ellipse,
  Path,
  Text,
  Note,
}

type XYWHFV = {
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
};

export type XYWH = Omit<XYWHFV, "fill" | "value">;

export type RectangleLayer = XYWHFV & {
  type: LayerType.Rectangle;
};

export type EllipseLayer = XYWHFV & {
  type: LayerType.Ellipse;
};

export type PathLayer = XYWHFV & {
  type: LayerType.Path;
  points: number[][];
};

export type TextLayer = XYWHFV & {
  type: LayerType.Text;
};

export type NoteLayer = XYWHFV & {
  type: LayerType.Note;
};

export type Point = {
  x: number;
  y: number;
};

export enum Side {
  Top = 1,
  Bottom,
  Left = 4,
  Right = 8,
}

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
}

export type CanvasState =
  | { mode: CanvasMode.None }
  | { mode: CanvasMode.SelectionNet; origin: Point; current?: Point }
  | { mode: CanvasMode.Translating; current: Point }
  | {
      mode: CanvasMode.Inserting;
      layerType:
        | LayerType.Ellipse
        | LayerType.Rectangle
        | LayerType.Text
        | LayerType.Note;
    }
  | { mode: CanvasMode.Pencil }
  | { mode: CanvasMode.Pressing; origin: Point }
  | {
      mode: CanvasMode.Resizing;
      initialBounds: XYWH;
      corner: Side;
    };

export type Layer =
  | RectangleLayer
  | EllipseLayer
  | PathLayer
  | TextLayer
  | NoteLayer;
