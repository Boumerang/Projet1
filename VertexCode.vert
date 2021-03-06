#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aNormal;
layout (location = 2) in vec2 atexCoord;

out vec3 Normal;
out vec3 FragPos;
out vec2 TexCoords;

uniform mat4 view;
uniform mat4 projection;

void main()
{
    Normal = aNormal;
    FragPos = aPos;
    TexCoords = atexCoord;
    gl_Position = projection * view * vec4(FragPos, 1.0);
}