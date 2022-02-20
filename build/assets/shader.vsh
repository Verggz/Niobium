#version 300 es

layout(location = 0)in vec2 points;
layout(location = 1)in vec2 texCoords;

uniform mat3 view;
uniform mat3 model;

out vec2 outTexCoord;

void main(){
    gl_Position = vec4(view * model * vec3(points,1),1);
    outTexCoord = texCoords;
}