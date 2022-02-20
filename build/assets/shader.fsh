#version 300 es

precision highp float;

in vec2 outTexCoord;
uniform sampler2D sampler;

out vec4 outputColour;
 
void main() {
  outputColour = texture(sampler,outTexCoord);
}