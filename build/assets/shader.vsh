#version 300 es

layout(location = 0)in vec2 points;
layout(location = 1)in vec2 texCoords;

uniform mat3 view;
uniform mat3 model;
uniform mat3 projection;
uniform mat3 scale;

out vec2 outTexCoord;

void main(){
    gl_Position = vec4(projection * view * model * scale * vec3(points,1),1);
    outTexCoord = texCoords;
}